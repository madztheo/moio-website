import { ImageComparator } from "../image-comparator/ImageComparator";
import styles from "./Team.module.scss";

export const Team = ({ t }) => {
  return (
    <section id="teamSection" className={styles.team__container}>
      <p className={styles.team__title}>{t("weAreTeamMoio")}</p>
      <div className={styles.team__details}>
        <div>
          <ImageComparator
            topImage="/images/theo.png"
            bottomImage="/images/maxence.png"
            vertical={false}
            width={200}
            height={200}
          />
        </div>
        <p className={styles.team__description}>{t("teamDescription")}</p>
      </div>
      <button
        onClick={() => {
          document.getElementById("contactSection").scrollIntoView();
        }}
        className={styles.start__button}
      >
        {t("startProject")}
      </button>
    </section>
  );
};
