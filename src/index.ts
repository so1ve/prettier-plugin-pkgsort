import { basename } from "node:path";

import type { Parser } from "prettier";
import { parsers as prettierParsers } from "prettier/plugins/babel";
import type { Options } from "prettier-package-json";
import { format } from "prettier-package-json";
import { createSyncFn } from "synckit";

import { defaultOptions } from "./default-options";
import type { PrettierOptions } from "./types";

const parser = prettierParsers["json-stringify"];
let prettierFormat: (text: string, options: any) => string;
const isPackageJson = (path: string) => basename(path) === "package.json";

export const parsers = {
  "json-stringify": {
    ...parser,
    preprocess(text, options: PrettierOptions) {
if(!isPackageJson(options.filepath)) return text
      
      if (!prettierFormat) {
        prettierFormat = createSyncFn(require.resolve("./worker.cjs"));
      }

      // To avoid parsing errors
      text = prettierFormat(text, { filepath: "package.json" });

      if (parser.preprocess) {
        text = parser.preprocess(text, options);
      }

      const formatOptions: Options = {
        useTabs: options.useTabs,
        tabWidth: options.tabWidth,
        expandUsers: options.pkgsortExpandUsers ?? defaultOptions.expandUsers,
        keyOrder: options.pkgsortKeyOrder ?? defaultOptions.keyOrder,
      };

      
      return format(JSON.parse(text), formatOptions);
    },
  } as Parser,
};
