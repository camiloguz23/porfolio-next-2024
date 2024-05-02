import styles from "./badges.module.css";

interface Props {
  text: string;
  icons?: React.ReactNode;
}

export const UiBadges = ({ icons, text }: Props): JSX.Element => (
  <span className={styles.span}>
    {icons} {text}
  </span>
);
