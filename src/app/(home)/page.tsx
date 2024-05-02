import { getDictionary } from "@/shared/translate";
import styles from "./home.module.css";
import { IntroHome, SocialLinks, UiExperience } from "./sections";

export default function Home(): JSX.Element {
  const { dictionary } = getDictionary();
  return (
    <main className={styles.main}>
      <IntroHome dictionary={dictionary} />
      <SocialLinks dictionary={dictionary} />
      <UiExperience dictionary={dictionary} />
    </main>
  );
}
