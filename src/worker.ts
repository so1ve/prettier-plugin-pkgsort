import { format } from "prettier";
import { runAsWorker } from "synckit";

runAsWorker(async (code: string, options: any) => await format(code, options));
