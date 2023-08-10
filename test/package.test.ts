import { createRequire } from "node:module";

import { expect, it } from "vitest";

it("should be importable", async () => {
  const imported = await import("..");

  expect(imported).toMatchObject({
    parsers: {},
  });
});

it("should be requireable", () => {
  const imported = createRequire(import.meta.url)("..");

  expect(imported).toMatchObject({
    parsers: {},
  });
});

it("should be resolvable", () => {
  const imported = require.resolve("..");

  expect(imported).toMatch(/prettier-plugin-pkgsort\/dist\/index.cjs/);
});
