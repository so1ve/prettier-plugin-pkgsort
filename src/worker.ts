import { runAsWorker } from "synckit";
import { format } from "prettier";

runAsWorker(async (code: string, options: any) => {
  return await format(code, options);
});