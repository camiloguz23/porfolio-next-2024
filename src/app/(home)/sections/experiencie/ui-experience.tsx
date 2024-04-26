import { EnterpriseIcon } from "@/icons/enterprise-icon";
import { DictionaryType } from "@/shared/translate";
import { ExperienceType } from "@/shared/types";
import { ItemExperience } from "./item-experience";
import styles from "./experience.module.css";

interface Props {
  dictionary: DictionaryType;
}

export const UiExperience = ({ dictionary }: Props) => {
  const experience: ExperienceType[] = [
    {
      title: "Devontic - Frontend Developer",
      date: "octobre 2023 - present",
      description: dictionary.descriptionEnterprise.devontic,
      currently: true,
    },
    {
      title: "Supremacy Kingdom - Leader Team Frontend Developer",
      date: "marzo 2023 - octubre 2023",
      description: dictionary.descriptionEnterprise.kingdom,
      currently: false,
    },
    {
      title: "Desavant - Frontend Developer ",
      date: "enero 2022 - enero 2023",
      description: dictionary.descriptionEnterprise.devsavant,
      currently: false,
    },
    {
      title: "Globant - fullstack Developer",
      date: "julio 20221 - enero 2022",
      description: dictionary.descriptionEnterprise.globant,
      currently: false,
    },
  ];
  return (
    <section className={styles.section}>
      <h3 className={styles.h3}>
        <EnterpriseIcon /> {dictionary.experience}
      </h3>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experience.map((exp) => (
          <ItemExperience
            key={exp.title}
            title={exp.title}
            date={exp.date}
            description={exp.description}
            currently={exp.currently}
          />
        ))}
      </ol>
    </section>
  );
};
