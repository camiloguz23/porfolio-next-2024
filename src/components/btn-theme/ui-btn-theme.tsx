"use client";

import { ThemeIcon } from "@/icons";
import { ThemesType } from "@/shared/types";
import { useState } from "react";
import styles from "./btn-theme.module.css";
import { setThemeAction } from "@/action";
import { useBoolean } from "@/shared/hooks";

export const UiBtnTheme = () => {
  const [theme, setTheme] = useState<ThemesType>("system");
  const modal = useBoolean();

  const setColorTheme = (theme: ThemesType) => {
    setTheme(theme);
    setThemeAction(theme);
    modal.onFalse();
  };

  return (
    <button className={styles.btn} onClick={modal.onToggle}>
      <ThemeIcon />
      {modal.value && (
        <div className={styles["my-popover"]}>
          <p className={styles.paf} onClick={() => setColorTheme("system")}>
            Sistema
          </p>
          <p className={styles.paf} onClick={() => setColorTheme("light")}>
            Claro
          </p>
          <p className={styles.paf} onClick={() => setColorTheme("dark")}>
            Oscuro
          </p>
        </div>
      )}
    </button>
  );
};
