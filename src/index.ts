import { basename } from "node:path";

import type { Parser } from "prettier";
import { format as prettierFormat } from "prettier";
import { parsers as prettierParsers } from "prettier/parser-babel";
import type { Options } from "prettier-package-json";
import { format } from "prettier-package-json";

import { defaultOptions } from "./default-options";
import type { PrettierOptions } from "./types";

const parser = prettierParsers["json-stringify"];

const isPackageJson = (path: string) => basename(path) === "package.json";

export const parsers = {
  "json-stringify": {
    ...parser,
    preprocess(text, options: PrettierOptions) {
      // To avoid parsing errors
      text = prettierFormat(text, { filepath: "package.json" });

      if (parser.preprocess) {
        text = parser.preprocess(text, options);
      }

      const formatOptions: Options = {
        useTabs: options.useTabs,
        tabWidth: options.tabWidth,
        expandUsers: options.pkgExpandUsers ?? defaultOptions.expandUsers,
        keyOrder: options.pkgKeyOrder ?? defaultOptions.keyOrder,
      };

      const shouldFormat = isPackageJson(options.filepath);

      return shouldFormat ? format(JSON.parse(text), formatOptions) : text;
    },
  } as Parser,
};
