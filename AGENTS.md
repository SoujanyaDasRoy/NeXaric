# AGENTS.md

## Purpose

This file is intentionally concise.

It contains the operational defaults and mandatory behaviors for:

* AI coding agents
* contributors
* reviewers

Detailed philosophy, operational standards, and architectural guidance should live in dedicated documents such as:

* `/docs/engineering-principles.md`
* `/docs/architecture-guidelines.md`
* `/docs/operational-standards.md`
* `/docs/ai-agent-rules.md`
* `/docs/review-checklists.md`

AGENTS.md should remain:

* short
* actionable
* enforceable
* easy to reference during implementation

Engineering principles are balancing forces, not absolute laws.
Context and engineering judgment matter more than mechanical rule-following.

Prefer solutions with the lowest total cognitive cost.

---

> This document is structured in layers:
>
> 1. Core Rules (must-follow defaults)
> 2. Engineering Standards (practical guidance)
> 3. Operational & Scalability Standards
> 4. Advanced Architecture Guidance
>
> Teams should apply rigor proportionate to system criticality and business impact.

## Purpose

This document defines the engineering standards, architectural principles, operational expectations, and AI-agent constraints for this repository.

The goal is to build systems that are:

* correct
* maintainable
* scalable
* observable
* secure
* evolvable
* operationally reliable

This document is intentionally pragmatic.

Engineering is about tradeoffs.
Rules are defaults, not dogma.
Exceptions are allowed when:

* justified clearly
* documented briefly
* understood systemically
* reviewed responsibly

---

# Core Engineering Principles

## 1. Solve Root Causes, Not Symptoms

Do not patch issues blindly.

Before fixing a bug:

1. identify the root cause
2. trace system impact
3. understand failure conditions
4. verify invariants
5. evaluate regression risk

A bug is often evidence of:

* unclear ownership
* hidden coupling
* invalid assumptions
* missing validation
* architectural drift
* insufficient tests

Fix the underlying weakness whenever reasonably possible.

---

## 2. Prefer Long-Term Correctness

Default toward:

* correct solutions
* maintainable systems
* explicit behavior
* scalable architecture

Avoid:

* fragile patches
* hidden side effects
* duplicated business logic
* undocumented workarounds

However:
production stability and customer impact matter.

Temporary mitigations are acceptable only when:

* necessary for reliability or incident response
* isolated cleanly
* documented clearly
* tracked for removal
* minimized in scope

Temporary fixes must not silently become permanent architecture.

---

## 3. Minimize Unnecessary Complexity

Complexity is a long-term cost.

Every:

* abstraction
* dependency
* layer
* framework
* generic utility
* architectural pattern
* indirection

must justify its maintenance cost.

Prefer:

* simple solutions
* direct reasoning
* clear ownership
* low cognitive overhead

Do not introduce architecture for hypothetical future problems.

---

## 4. Apply YAGNI

You Aren’t Gonna Need It.

Do not build:

* speculative abstractions
* unused extension points
* generalized systems without evidence
* configurable infrastructure without real variation

Design systems so they can evolve cleanly,
but implement only what is currently needed.

---

## 5. Optimize for Change, Not Prediction

Requirements evolve.

Good systems:

* isolate responsibilities
* maintain clear boundaries
* support incremental change
* tolerate replacement
* minimize coupling

Avoid rigid assumptions.

---

# Decision Framework

## Reversible vs Irreversible Decisions

Not all decisions require the same rigor.

### Reversible Decisions

Use lightweight process for:

* local refactors
* internal improvements
* experiments
* prototypes
* low-risk features
* easily reversible changes

Optimize for:

* speed
* feedback loops
* iteration
* learning

### Hard-to-Reverse Decisions

Use deeper rigor for:

* public APIs
* distributed system contracts
* security boundaries
* data model changes
* infrastructure migrations
* critical workflows
* authentication/authorization systems

Optimize for:

* correctness
* reliability
* migration safety
* operational stability

Match process to reversibility and impact.

---

## Ownership

Every production system should have clear ownership.

Ownership includes:

* maintenance responsibility
* operational accountability
* incident response ownership
* dependency stewardship
* lifecycle management

Unowned systems degrade over time.

---

## Knowledge Sharing & Decision Documentation

Important engineering decisions should be documented.

Use lightweight ADRs or equivalent documentation for:

* major architecture decisions
* irreversible tradeoffs
* infrastructure choices
* operational constraints

Knowledge concentrated in individuals creates scaling risk.

---

## Engineering Tradeoff Order

Engineering decisions are contextual.

Avoid rigid rule-following without understanding business impact, operational risk, or system criticality.

Optimize for:

* human comprehension
* system correctness
* operational reliability
* sustainable delivery velocity

Code is maintained far longer than it is written.
Systems that are easy to understand are easier to:

* debug
* extend
* secure
* scale
* operate safely

Prefer solutions that minimize:

* concepts
* dependencies
* execution paths
* hidden behavior
* coordination cost
* cognitive load

Every feature consumes complexity budget.
Complexity must justify its long-term cost.

---

## System Criticality Levels

Apply engineering rigor proportionate to system importance.

| Tier   | Example                                         | Expected Standards                          |
| ------ | ----------------------------------------------- | ------------------------------------------- |
| Tier 0 | prototypes, experiments                         | lightweight process, fast iteration         |
| Tier 1 | internal tools                                  | moderate testing and observability          |
| Tier 2 | customer-facing systems                         | strong testing, monitoring, rollback safety |
| Tier 3 | critical infrastructure, financial/auth systems | maximum reliability, auditability, safety   |

Do not apply Tier 3 process overhead to Tier 0 experimentation.

---

## 6.1 Optimize for Local Reasoning

Code should be understandable without navigating excessive layers or files.

Prefer:

* cohesive modules
* predictable flow
* localized behavior
* direct reasoning

Avoid architectures that require tracing behavior across many abstractions.

---

## 6.2 Reduce Cognitive Load

Human comprehension is a primary scalability constraint.

Prefer:

* fewer layers
* fewer concepts
* fewer execution paths
* fewer hidden dependencies
* consistent patterns
* discoverable behavior

Simple mental models outperform clever abstractions.

Code should optimize for clarity, not impressiveness.

Human comprehension is a primary scalability constraint.

Prefer:

* fewer layers
* fewer concepts
* fewer execution paths
* fewer hidden dependencies
* consistent patterns

Simple mental models outperform clever abstractions.

---

## 6.3 Prefer Direct Architecture

Prefer fewer layers when possible.

A direct and understandable architecture is usually better than excessive architectural purity.

Avoid introducing:

* wrappers
* adapters
* interfaces
* orchestration layers
* generic systems
* internal frameworks

unless they solve a demonstrated problem.

Do not build internal platforms or frameworks unless:

* multiple teams need them
* duplication is proven
* ownership exists
* maintenance cost is justified.

Prefer fewer layers when possible.

A direct and understandable architecture is usually better than excessive architectural purity.

Avoid introducing:

* wrappers
* adapters
* interfaces
* orchestration layers
* generic systems

unless they solve a demonstrated problem.

---

## 6.4 Concrete Before Generic

Do not generalize for hypothetical reuse.

Concrete implementations are preferred until:

* multiple real use-cases exist
* variation is proven
* duplication creates maintenance burden

Avoid speculative generic programming.

---

## 6.5 Stable Interfaces Matter

Prefer stable contracts and evolving implementations.

Frequently changing interfaces increase:

* coordination cost
* regressions
* migration burden
* system instability

Design APIs and module boundaries deliberately.

---

## 6.6 Encourage Safe Experimentation

Low-risk systems and experimental work should optimize for learning speed.

Avoid excessive process overhead for:

* prototypes
* research work
* exploratory features
* internal experiments

Use stronger rigor as systems mature or become business-critical.

---

## 7. Engineering Tradeoff Priorities

When making decisions, prioritize:

1. Correctness
2. Reliability
3. Simplicity
4. Maintainability
5. Observability
6. Security
7. Scalability
8. Developer Velocity
9. Performance Optimization

This order is contextual, not absolute.

For critical systems:

* reliability may outweigh velocity
* performance may outweigh abstraction purity
* operational simplicity may outweigh elegance

Document major tradeoffs explicitly.

---

## 7. Engineering Tradeoff Priorities

When tradeoffs exist, prioritize based on context:

1. Correctness
2. Reliability
3. Human comprehension
4. Simplicity
5. Maintainability
6. Observability
7. Security
8. Delivery velocity
9. Scalability
10. Performance optimization elegance

The correct tradeoff depends on:

* business impact
* operational risk
* system criticality
* customer impact
* recovery difficulty

Document major tradeoffs when they materially affect architecture or operations.

---

## 8. Avoid Overengineering

Prefer the simplest solution that:

* satisfies current requirements
* preserves reasonable extensibility
* remains maintainable

Avoid building enterprise-scale architecture for small problems.

Example:
A simple CRUD application does not initially require:

* event buses
* distributed orchestration
* excessive domain layers
* unnecessary interfaces
* complex plugin systems

Complexity should emerge from real needs.

---

# Architecture Standards

## 8. Clear Ownership Boundaries

Every module should have:

* a clear responsibility
* explicit ownership
* predictable dependencies
* stable contracts

If a component requires “and” to describe its purpose,
consider splitting responsibilities.

---

## 9. Separation of Concerns

Separate:

* business logic
* presentation
* infrastructure
* persistence
* networking
* configuration
* validation
* orchestration

Business rules should remain independent from frameworks whenever practical.

---

## 10. Dependency Direction Rules

Dependencies should flow inward toward stable business logic.

Prefer:

* domain-independent infrastructure
* adapter boundaries
* interface-driven integration

Avoid:

* cyclic dependencies
* UI directly accessing persistence
* infrastructure leaking into core business rules

Lower-level systems should not depend on higher-level policy.

---

## 11. Composition Over Inheritance

Prefer:

* composition
* modularity
* interfaces
* dependency injection

Use inheritance only for true and stable “is-a” relationships.

---

## 12. Explicitness Over Magic

Code should be predictable.

Avoid:

* hidden side effects
* surprising mutations
* implicit global state
* magical behavior
* unclear abstractions
* reflection-heavy systems
* hidden dependency registration
* invisible runtime behavior

Prefer:

* explicit data flow
* typed contracts
* visible dependencies
* deterministic behavior
* statically discoverable behavior whenever practical

Hidden runtime behavior increases debugging difficulty and cognitive load.

Code should be predictable.

Avoid:

* hidden side effects
* surprising mutations
* implicit global state
* magical behavior
* unclear abstractions

Prefer:

* explicit data flow
* typed contracts
* visible dependencies
* deterministic behavior

---

## 13. Preserve System Invariants

Before changing systems, identify critical invariants.

Examples:

* transaction integrity
* authentication guarantees
* idempotency
* cache consistency
* authorization boundaries
* state synchronization

Changes must preserve these invariants.

---

# Clean Code Standards

## 14. Naming

Names must communicate intent clearly.

Guidelines:

* functions → actions
* variables → meaningful nouns
* booleans → is/has/can/should
* avoid vague abbreviations
* avoid misleading terminology

Avoid meaningless names like:

* data
* helper
* manager
* misc
* thing
* stuff

unless the abstraction genuinely represents those concepts.

---

## 15. Function Design

Functions should:

* do one coherent thing
* minimize side effects
* remain understandable locally
* avoid hidden mutation

Prefer:

* small-to-medium sized functions
* shallow nesting
* explicit return values
* clear inputs and outputs

Avoid excessive fragmentation.

A clear 80-line function is often better than 15 tiny disconnected functions.

Optimize for readability and local reasoning.

---

## 15.1 File and Module Cohesion

Avoid:

* giant files
* god objects
* massive services
* unrelated responsibilities in one module

Modules should:

* maintain cohesive responsibilities
* minimize cross-module coordination
* expose clear interfaces
* remain understandable in isolation

Prefer logical cohesion over arbitrary file splitting.

Functions should:

* do one coherent thing
* minimize side effects
* remain understandable locally
* avoid hidden mutation

Prefer:

* small-to-medium sized functions
* shallow nesting
* explicit return values
* clear inputs and outputs

Avoid excessive fragmentation.

A clear 80-line function is often better than 15 tiny disconnected functions.

Optimize for readability and local reasoning.

---

## 16. State Management Principles

State is one of the primary sources of system complexity.

Clearly define:

* state ownership
* mutation boundaries
* synchronization responsibilities
* cache invalidation behavior
* source-of-truth systems

Prefer:

* derived state over duplicated state
* explicit synchronization
* isolated mutation
* predictable lifecycle management

Avoid:

* uncontrolled shared mutable state
* hidden synchronization
* duplicated sources of truth
* implicit cache behavior

---

## 17. Avoid Shared Mutable State

Shared mutable state increases:

* coupling
* race conditions
* unpredictability
* debugging difficulty

Prefer:

* immutability where practical
* controlled state ownership
* isolated mutation boundaries
* explicit synchronization

---

## 17. DRY Carefully

Avoid duplicating:

* business rules
* validation logic
* core invariants

But do not abstract prematurely.

Duplication is sometimes cheaper than premature generalization.

Introduce abstractions only when:

* duplication is proven
* variation is real
* ownership is clear
* the abstraction simplifies reasoning

---

## 18. Comments Explain WHY

Code should explain WHAT.
Comments should explain:

* WHY decisions exist
* tradeoffs
* constraints
* unusual behavior
* operational context

Avoid redundant comments.

---

# AI-Agent Development Rules

## 19. Understand Before Modifying

Before changing code:

1. read surrounding modules
2. trace execution flow
3. identify ownership boundaries
4. understand existing patterns
5. evaluate downstream effects
6. determine whether the change is reversible
7. identify operational risk

Never blindly modify unfamiliar systems.

Before changing code:

1. read surrounding modules
2. trace execution flow
3. identify ownership boundaries
4. understand existing patterns
5. evaluate downstream effects

Never blindly modify unfamiliar systems.

---

## 20. AI-Generated Code Verification

AI-generated code must always be reviewed critically.

Verify:

* APIs actually exist
* imports are valid
* assumptions match the real system
* edge cases are handled
* tests reflect real behavior
* abstractions are justified
* dependencies are necessary

Never trust generated code without validation.

Human review remains mandatory for production-critical systems.

---

## 21. Do Not Invent APIs or Patterns

AI-generated code must not:

* hallucinate APIs
* fabricate framework behavior
* invent unavailable dependencies
* create unused abstractions
* introduce inconsistent architecture

Verify assumptions against the actual codebase.

---

## 21. Reuse Existing Patterns

Before introducing new:

* abstractions
* utilities
* services
* state systems
* patterns

check whether equivalent logic already exists.

Avoid parallel implementations.

---

## 22. Every Abstraction Must Justify Itself

Do not create:

* factories
* wrappers
* managers
* generic layers
* base classes
* interfaces

unless they solve a real problem.

Every abstraction should reduce:

* duplication
* coupling
* complexity
* instability

—not increase them.

---

## 23. Prefer Deleting Over Expanding

The best code is often code that no longer exists.

Regularly:

* remove dead code
* remove obsolete abstractions
* simplify flows
* eliminate unused systems
* reduce configuration surface area

Complexity should trend downward over time.

---

# Error Handling & Reliability

## 24. Fail Transparently

Do not silently swallow failures.

Errors should:

* contain context
* support debugging
* preserve traceability
* remain actionable

Avoid:

* silent null returns
* empty catch blocks
* hidden fallbacks
* suppressed exceptions

---

## 25. Validate at Boundaries

Validate:

* API input
* external payloads
* user input
* environment configuration
* database responses
* event messages

Never trust external systems.

---

## 26. Defensive Engineering

Assume:

* networks fail
* APIs timeout
* malformed data exists
* concurrency issues occur
* retries duplicate requests
* services become unavailable

Systems should degrade gracefully.

---

## 27. Distributed System Safety

For distributed or asynchronous systems:

* design for idempotency
* handle retries safely
* account for race conditions
* support eventual consistency where needed
* avoid assuming ordering guarantees
* use timeouts intentionally
* implement backpressure where appropriate
* propagate cancellation correctly
* limit concurrency intentionally
* clean up async resources safely
* avoid orphaned async tasks

Document consistency expectations clearly.

---

## 27.1 Async Safety

Async systems must:

* enforce timeout ownership
* avoid unbounded concurrency
* support graceful cancellation
* release resources deterministically
* avoid hidden background work

Concurrency bugs are often reliability bugs.

Design async behavior deliberately.

For distributed or asynchronous systems:

* design for idempotency
* handle retries safely
* account for race conditions
* support eventual consistency where needed
* avoid assuming ordering guarantees
* use timeouts intentionally
* implement backpressure where appropriate

Document consistency expectations clearly.

---

# Testing Standards

## 28. Tests Are Part of the Feature

Code is incomplete without appropriate tests.

Testing strategy should include where relevant:

* unit tests
* integration tests
* contract tests
* end-to-end tests
* load tests
* regression tests

Critical flows require stronger coverage.

---

## 29. Test Behavior and Contracts

Prefer testing:

* externally visible behavior
* business rules
* contracts
* integration boundaries

Avoid over-testing implementation details.

Tests should remain resilient to internal refactoring.

---

## 30. Deterministic Tests Only

Tests should:

* run reliably
* avoid timing flakiness
* isolate shared state
* avoid external network dependence
* produce repeatable results

Flaky tests must be fixed quickly.

---

## 31. Every Bug Fix Requires Regression Coverage

Whenever practical:

* reproduce the bug
* create a failing test
* implement the fix
* verify the regression test passes

Prevent recurrence systematically.

---

# Refactoring Principles

## 32. Improve Code Incrementally

Leave systems better than you found them.

Improve:

* readability
* maintainability
* observability
* consistency
* safety

Avoid unnecessary rewrites.

---

## 33. Refactor Safely

Large changes should be incremental.

Prefer:

1. characterization tests
2. isolation of responsibilities
3. staged refactors
4. continuous verification
5. migration paths

Avoid destabilizing massive rewrites.

---

# Operational Engineering

## 34. Observability Is Mandatory

Systems should be observable in production.

Include:

* structured logging
* metrics
* tracing where appropriate
* health checks
* actionable alerts

If failures cannot be diagnosed,
the system is incomplete.

Operational visibility is part of system design,
not an optional afterthought.

Systems should be observable in production.

Include:

* structured logging
* metrics
* tracing where appropriate
* health checks
* actionable alerts

If failures cannot be diagnosed,
the system is incomplete.

---

## 35. Logs Must Be Useful

Logs should:

* provide context
* include identifiers
* support debugging
* avoid noise

Never log:

* secrets
* sensitive personal data
* credentials

---

## 36. Deployment Safety

Prefer:

* feature flags
* staged rollouts
* canary deployments
* rollback capability
* backward-compatible migrations

Production deployments should minimize blast radius.

---

## 37. Reliability Over Perfection

During incidents:

* restore stability first
* reduce customer impact
* preserve data integrity
* communicate clearly

After stabilization:

* identify root cause
* remove temporary mitigations
* improve prevention mechanisms

---

# Performance Principles

## 38. Measure Before Optimizing

Do not optimize blindly.

Use:

* profiling
* benchmarks
* production metrics
* bottleneck analysis

Avoid premature optimization.

---

## 39. Respect Performance Early

Performance matters because it affects:

* reliability
* scalability
* infrastructure cost
* latency
* user experience

Consider:

* algorithmic complexity
* N+1 query patterns
* memory growth
* unnecessary allocations
* blocking operations

Balance clarity with efficiency.

---

# Security Standards

## 40. Security Is a Default Requirement

Always:

* validate input
* sanitize output
* enforce authorization
* apply least privilege
* protect secrets
* review trust boundaries

Never:

* hardcode credentials
* trust client-side validation
* expose sensitive internals publicly

---

# Dependency Management

## Automated Enforcement

The following should be enforced automatically wherever practical:

* formatting
* linting
* type checking
* test execution
* security scanning
* dependency auditing
* architecture constraints
* import boundary rules
* forbidden dependency checks
* CI validation

Do not rely solely on manual review.

Prefer automated enforcement over tribal knowledge.

---

## Configuration Management

Minimize configuration surface area.

Avoid:

* excessive feature flags
* scattered configuration ownership
* hidden runtime behavior
* deeply nested config systems

Prefer:

* explicit defaults
* centralized configuration ownership
* predictable runtime behavior
* limited operational complexity

Configuration complexity is system complexity.

---

## Tooling & Environment Consistency

Prefer:

* reproducible environments
* deterministic builds
* standardized tooling
* automated setup
* consistent CI behavior

Tooling inconsistency creates operational and debugging overhead.

---

## Technology Selection

Prefer proven, stable, and understandable technology over novelty.

New technology must justify:

* operational benefit
* maintenance cost
* ecosystem maturity
* onboarding complexity
* long-term viability

Boring technology is often a scalability advantage.

---

## 41. Minimize Dependencies

Every dependency increases:

* attack surface
* maintenance burden
* upgrade risk
* operational complexity

Before adding dependencies:

1. verify necessity
2. evaluate maintenance quality
3. review security posture
4. assess ecosystem stability
5. prefer simpler alternatives when reasonable

---

## 42. Dependency Changes Must Be Controlled

Use:

* lockfiles
* controlled upgrades
* changelog reviews
* compatibility testing

Avoid uncontrolled dependency drift.

---

# API & Data Design

## 43. APIs Are Contracts

APIs should be:

* documented
* versioned when necessary
* consistent
* backward compatible where practical

Breaking changes require migration planning.

---

## 44. Data Integrity First

Protect integrity at:

* application level
* database level
* workflow level

Use:

* constraints
* transactions
* idempotency
* consistency checks

Never assume clean data.

---

## 45. Safe Migrations Only

Database and schema migrations should:

* be reversible where practical
* support rollback plans
* avoid destructive assumptions
* work on production-scale data
* preserve backward compatibility during rollout

---

## 45.1 Data Evolution

Long-lived systems must support safe data evolution.

Consider:

* schema versioning
* event versioning
* backward compatibility
* forward compatibility
* retention policies
* migration windows

Data evolution strategy should be intentional,
not reactive.

Database migrations should:

* be reversible where practical
* support rollback plans
* avoid destructive assumptions
* work on production-scale data
* preserve backward compatibility during rollout

---

# Frontend Engineering

## 46. Keep UI Predictable

Avoid:

* massive components
* hidden state mutations
* duplicated business rules in UI
* tightly coupled rendering logic

Prefer:

* composable components
* isolated state ownership
* declarative rendering
* reusable patterns

---

## 47. Accessibility Is Required

Interfaces should support:

* keyboard navigation
* semantic structure
* readable contrast
* assistive technologies

Accessibility is part of quality.

---

# Collaboration & Delivery

## 48. Optimize for Team Scalability

Code should be understandable by engineers unfamiliar with the feature.

Prioritize:

* consistency
* discoverability
* maintainability
* onboarding clarity

Local cleverness is less valuable than global clarity.

---

## 49. Legacy System Guidance

When working with legacy systems:

* improve incrementally
* prioritize safety over purity
* isolate bad patterns gradually
* avoid unnecessary rewrites
* preserve operational stability

Incremental modernization is usually safer than large rewrites.

---

## 50. Keep Pull Requests Focused

PRs should:

* solve one coherent problem
* minimize unrelated changes
* remain reviewable
* explain major decisions

Smaller PRs reduce regression risk.

---

## 51. Keep Pull Requests Focused

PRs should:

* solve one coherent problem
* minimize unrelated changes
* remain reviewable
* explain major decisions

Smaller PRs reduce regression risk.

---

## 52. Balance Quality With Delivery

Engineering quality matters,
but product impact and iteration speed also matter.

Avoid:

* endless perfectionism
* unnecessary architectural expansion
* premature optimization

Build the right level of engineering for the actual problem.

---

# Anti-Patterns to Avoid

Common failure patterns include:

* speculative abstractions
* architecture built for hypothetical scale
* generic frameworks without real consumers
* hidden complexity behind helper layers
* excessive indirection
* parallel business logic paths
* giant god services
* uncontrolled shared mutable state
* excessive configuration systems
* fragile async orchestration
* silent failure handling
* abstraction layers that merely relocate complexity

Abstractions must reduce complexity,
not merely move it elsewhere.

---

# Definition of Done

A task is complete when:

* the root cause is addressed appropriately
* regressions are considered
* tests are updated where necessary
* observability remains sufficient
* architecture remains maintainable
* security implications are reviewed
* operational impact is considered
* documentation is updated when needed
* unnecessary complexity is avoided

---

# Enforcement Philosophy

Engineering standards should:

* reduce chaos
* improve consistency
* increase reliability
* preserve delivery speed
* support maintainability

Avoid process that creates unnecessary bureaucracy.

Automate enforcement wherever practical.

Prefer:

* linting
* CI validation
* architecture checks
* static analysis
* automated testing

over manual policing.

Principles guide engineering judgment.
They do not replace thinking.

Engineering standards are strongest when:

* documented clearly
* automated where possible
* reinforced consistently
* kept understandable
* adapted pragmatically

Process should reduce chaos,
not create unnecessary bureaucracy.

---

# Final Principle

Build systems that:

* remain understandable under pressure
* scale without architectural collapse
* fail predictably
* evolve safely
* minimize unnecessary complexity
* optimize for human comprehension
* preserve fast iteration where appropriate
* balance pragmatism with engineering discipline

Prefer the architecture with the lowest long-term cognitive cost.

Good engineering is not maximalism.
It is the disciplined balance of:

* simplicity
* correctness
* maintainability
* reliability
* delivery speed
* operational safety

Build software that future engineers can confidently understand, debug, extend, and trust.

Write systems that:

* remain understandable under pressure
* scale without architectural collapse
* fail predictably
* evolve safely
* minimize unnecessary complexity
* support long-term maintainability
* balance pragmatism with engineering discipline

Build software that future engineers can confidently extend, debug, and trust.
