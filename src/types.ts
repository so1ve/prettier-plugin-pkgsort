import type { ParserOptions } from "prettier";
import type { Options } from "prettier-package-json";

type PkgOptions = {
  [K in keyof Options as `pkg${Capitalize<K & string>}`]: Options[K];
};

export type PrettierOptions = ParserOptions & PkgOptions;
