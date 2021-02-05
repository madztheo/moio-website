import { ImageComparator } from "../image-comparator/ImageComparator";
import styles from "./Projects.module.scss";

export const Projects = ({ t }) => {
  return (
    <section id="projectsSection" className={styles.projects__container}>
      <p className={styles.projects__title}>{t("latestProjects")}</p>
      <p className={styles.projects__subtitle}>
        {t("latestProjectsDescription")}
      </p>
      <div className={styles.image__comparator__wrapper}>
        <ImageComparator
          topImage="/images/fromcookie-design.png"
          bottomImage="/images/fromcookie-code.png"
          vertical={false}
          width="80vw"
          shadow={true}
          height="40vw"
        />
      </div>
      <div className={styles.projects__wrapper}>
        <img
          className={styles.project__image}
          alt=""
          src="/images/project-1.png"
        />
        <img
          className={styles.project__image}
          alt=""
          src="/images/project-3.png"
        />
      </div>
      <div className={styles.projects__wrapper}>
        <img
          className={styles.project__image}
          alt=""
          src="/images/project-2.png"
        />
      </div>
    </section>
  );
};
