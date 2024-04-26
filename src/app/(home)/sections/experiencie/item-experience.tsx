import { EnterpriseIcon } from "@/icons/enterprise-icon";
import styles from "./experience.module.css";

interface Props {
  title: string;
  date: string;
  description: string;
  currently: boolean;
}

export const ItemExperience = ({
  currently,
  title,
  date,
  description,
}: Props) => {
  return (
    <li className="mb-10 ms-6">
      <span
        className={`absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ${styles.colorItem}`}
      >
        <EnterpriseIcon size={14} />
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold gap-2">
        {title}
        {currently && <span className={styles.latest}>Latest</span>}
      </h3>
      <time
        className={`block mb-2 text-sm font-normal leading-none ${styles["text-gray-color"]}`}
      >
        {date}
      </time>
      <p className="mb-4 text-base font-normal">{description}</p>
    </li>
  );
};
