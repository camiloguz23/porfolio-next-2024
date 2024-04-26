import { getDictionary } from "@/shared/translate";
import styles from "./home.module.css";
import { IntroHome, SocialLinks, UiExperience } from "./sections";

export default function Home() {
  const dictonary = getDictionary();
  return (
    <main className={styles.main}>
      <IntroHome dictionary={dictonary} />
      <SocialLinks dictionary={dictonary} />
      <UiExperience dictionary={dictonary} />
    </main>
  );
}
