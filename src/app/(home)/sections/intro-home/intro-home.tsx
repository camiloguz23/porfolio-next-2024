import { UiBadges } from "@/components";
import { DictionaryType } from "@/shared/translate";
import styles from "./intro-home.module.css";

interface Props {
  dictionary: DictionaryType;
}

export const IntroHome = ({ dictionary }: Props): JSX.Element => (
  <>
    <div className={styles.circle}>
      <img
        src="/user.webp"
        alt="Foto animada de un progrador"
        className={styles.user}
      />
    </div>
    <h1 className={styles.title}>
      {dictionary.hi} Jeyson Guzman <UiBadges text={dictionary.rol} />
    </h1>
    <h2 className={styles.description}>
      {dictionary.description}
      <span className={styles.span}>{dictionary.special}</span>
      {dictionary.description2}
      <span className={styles.span}>{dictionary.description3}</span>
    </h2>
  </>
);
