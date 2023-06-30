import { format } from "prettier";
import { describe, expect, it } from "vitest";

// TODO

describe("should", () => {
  it("sort", () => {
    expect(
      format(
        `
{
  "name": "foo",
  "version": "1.0.0",

  "dependencies": {

   }
  }
  
  
  `,
        {
          plugins: ["."],
          filepath: "foo/package.json",
        },
      ),
    ).toMatchSnapshot();
  });
});
