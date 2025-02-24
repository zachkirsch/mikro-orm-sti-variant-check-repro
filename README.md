## `@Check` is ignored on STI variants

Issue: https://github.com/mikro-orm/mikro-orm/issues/6450

Repro:

Run `npm install`.

Run `npm migration:check` to make sure migrations are up-to-date.

Update `dog.entity.ts` to add an `@Check`, e.g.:

```ts
@Check({
  expression: "test-expression",
  name: "test-name",
})
```

Run `npm migration:create` - no migration is added even though the `@Check` is new.
