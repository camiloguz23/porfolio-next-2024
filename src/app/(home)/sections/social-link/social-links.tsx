import { UiBadges } from "@/components";
import { CvIcon, GithubIcon, GmailIcon, LinkedinIcon } from "@/icons";
import { DictionaryType, lang } from "@/shared/translate";
import Link from "next/link";
import styles from "./social-links.module.css";

interface Props {
  dictionary: DictionaryType;
}

export const SocialLinks = ({ dictionary }: Props) => {
  const language = lang;
  const socials = [
    {
      icons: <GithubIcon />,
      name: "Github",
      Link: "https://github.com/JeysonGuzman",
    },
    {
      icons: <LinkedinIcon />,
      name: "Linkedin",
      Link: "https://www.linkedin.com/in/jeyson-guzman/",
    },
    {
      icons: <GmailIcon />,
      name: dictionary.email,
      Link: "mailto:jeysonkmguzman@gmail.com",
    },
  ];
  return (
    <nav className={styles.links}>
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.Link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linksSocial}
        >
          <UiBadges text={social.name} icons={social.icons} />
        </Link>
      ))}
      <Link
        href={
          language === "es"
            ? "/documents/jeyson-guzman-cv.pdf"
            : "/documents/jeyson-guzman-cv-en.pdf"
        }
        target="_blank"
        rel="noopener noreferrer"
        download
        className={styles.linksSocial}
      >
        <UiBadges text={"CV"} icons={<CvIcon />} />
      </Link>
    </nav>
  );
};