import { LinkType } from "@/shared/types";
import { UiBtnTheme } from "../btn-theme/ui-btn-theme";
import { UiLink } from "../ui-link/ui-link";
import style from "./ui-header.module.css";

const links: LinkType[] = [
  {
    name: "Home",
    url: "/",
  },
  // {
  //   name: "About",
  //   url: "/about",
  // },
  // {
  //   name: "Porfolio",
  //   url: "/porfolio",
  // },
];

export const UiHeader = () => {
  return (
    <header className={style.header}>
      <img src="/JR.png" alt="letras J y R" width="30" height="30" />
      <nav className={style.nav}>
        {links.map((link) => (
          <UiLink key={link.name} link={link} />
        ))}
        <UiBtnTheme />
      </nav>
    </header>
  );
};
