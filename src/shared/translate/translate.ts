import "server-only";
import { headers } from "next/headers";
import es from "./es.json";
import en from "./en.json";

type langType = "es" | "en";

export type DictionaryType = typeof en;
const dictionaries = {
  en,
  es,
};

export const getDictionary = () => {
  const setLang = headers().get("accept-language")?.split(",")[0];
  const lang: langType = setLang?.includes("es") ? "es" : "en";
  return { dictionary: dictionaries[lang], lang };
};
