import styles from "./badges.module.css";

interface Props {
  text: string;
  icons: React.ReactNode;
}

export const UiBadges = ({ icons, text }: Props) => {
  return (
    <span className={styles.span}>
      {icons} {text}
    </span>
  );
};
