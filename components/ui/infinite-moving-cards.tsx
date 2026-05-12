"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    path?: string;
    descriptor?: string;
    accent?: string;
    objectPosition?: string;
    padding?: string;
    blendMode?: string;
    imgStyle?: React.CSSProperties;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const hasClonedItemsRef = React.useRef(false);
  
  const [start, setStart] = useState(false);
  
  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  }, [direction]);
  
  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "55s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "95s");
      }
    }
  }, [speed]);
  
  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      if (!hasClonedItemsRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        hasClonedItemsRef.current = true;
      }

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-8xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-3 py-6 w-max flex-nowrap md:gap-4 md:py-8",
          start && "animate-[scroll_var(--animation-duration)_var(--animation-direction)_linear_infinite]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="group relative flex h-[116px] w-[250px] flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-white px-8 shadow-[0_26px_70px_rgba(15,23,42,0.16),0_10px_28px_rgba(15,23,42,0.1)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-black/8 hover:shadow-[0_34px_88px_rgba(15,23,42,0.2),0_14px_36px_rgba(15,23,42,0.12)] md:h-[132px] md:w-[292px]"
            key={idx}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(15,23,42,0.055),transparent_58%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
            {item.path ? (
              <Image
                src={item.path}
                alt={item.title}
                width={360}
                height={160}
                className="relative block max-h-[82px] max-w-full object-contain drop-shadow-[0_12px_22px_rgba(15,23,42,0.08)] transition duration-300 group-hover:scale-[1.03] md:max-h-[96px]"
                unoptimized
                style={{
                  objectPosition: item.objectPosition,
                  ...(item.imgStyle ?? {}),
                  transform: item.imgStyle?.transform,
                  ...(item.blendMode
                    ? {
                        mixBlendMode:
                          item.blendMode as React.CSSProperties["mixBlendMode"],
                      }
                    : {}),
                }}
              />
            ) : (
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                {item.title}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
