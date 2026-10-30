# Domain docs

This is a single-context repository.

## Before exploring

- Read `GLOSSARY.md` at the repository root when it exists.
- Read ADRs in `docs/adr/` that touch the area being explored.
- Proceed silently when these files do not exist. Create them lazily through `/domain-modeling` when terminology or a decision is actually resolved.

## Layout

```text
/
├── GLOSSARY.md
├── docs/adr/
└── src/
```

The repository may not contain every path in this example yet.

## Vocabulary and decisions

Use glossary terms for domain concepts in issue titles, refactor proposals, hypotheses, and tests. If the needed concept is not defined, reconsider whether new language is necessary or record the gap for `/domain-modeling`.

If proposed work conflicts with an existing ADR, state the conflict explicitly instead of silently overriding it:

> Contradicts ADR-0007, but worth reopening because…
