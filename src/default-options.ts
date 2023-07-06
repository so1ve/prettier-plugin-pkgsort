import type { Options } from "prettier-package-json";

export const defaultOptions: Options = {
  expandUsers: false,
  keyOrder: [
    "name",
    "displayName",
    "private",
    "preview",
    "version",
    "packageManager",
    "publisher",
    "author",
    "contributors",
    "type",
    "description",
    "keywords",
    "homepage",
    "repository",
    "bugs",
    "funding",
    "categories",
    "license",
    "sideEffects",
    "exports",
    "bin",
    "main",
    "module",
    "unpkg",
    "jsdelivr",
    "types",
    "typesVersions",
    "icon",
    "files",
    "engines",
    "activationEvents",
    "contributes",
    "eslintConfig",
    "publishConfig",
    "scripts",
    "husky",
    "simple-git-hooks",
    "lint-staged",
    "dependencies",
    "devDependencies",
    "optionalDependencies",
    "peerDependencies",
    "peerDependenciesMeta",
    "pnpm",
    "overrides",
    "resolutions",
  ] as any,
};
