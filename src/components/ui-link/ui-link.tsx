"use client";

import { LinkType } from "@/shared/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./ui-link.module.css";

interface Props {
  link: LinkType;
}

export const UiLink = ({ link }: Props): JSX.Element => {
  const path = usePathname();
  return (
    <Link
      href={link.url}
      className={`${styles.link} ${path === link.url ? styles.active : ""}`}
    >
      {link.name}
    </Link>
  );
};
