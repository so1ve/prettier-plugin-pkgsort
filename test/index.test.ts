import { format } from "prettier";
import { describe, expect, it } from "vitest";

// TODO

describe("should", () => {
  it("sort", async () => {
    expect(
      await format(
        `
{
  "name": "foo",
  "version": "1.0.0",

  "dependencies": {

   }
  }
  
  
  `,
        {
          plugins: ["./dist/index.cjs"],
          filepath: "foo/package.json",
        },
      ),
    ).toMatchSnapshot();
  });
});
