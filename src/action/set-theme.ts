"use server";

import { ThemesType } from "@/shared/types";
import { cookies } from "next/headers";

export const setThemeAction = (theme: ThemesType): void => {
  const cookieStore = cookies();
  cookieStore.set("theme", theme, {
    maxAge: 60 * 60 * 24 * 90, // 90 days
  });
};
