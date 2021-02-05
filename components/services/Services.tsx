import styles from "./Services.module.scss";

export const Services = ({ t }) => {
  return (
    <section id="subCoverSection" className={styles.services__container}>
      <div className={styles.design__part}>
        <div className={styles.inner__content}>
          <p className={styles.description}>{t("designDescription")}</p>
          <button
            className={styles.contact__button}
            onClick={() => {
              document.getElementById("contactSection").scrollIntoView();
            }}
          >
            {t("contact")}
          </button>
        </div>
        <div className={styles.logo__container}>
          <img
            className={styles.logo}
            alt="Moio logo"
            src="/images/logo-white.png"
          />
          <div className={styles.divider}></div>
          <p className={styles.label}>design.</p>
        </div>
      </div>
      <div className={styles.build__part}>
        <div className={styles.inner__content}>
          <p className={styles.description}>{t("buildDescription")}</p>
          <button
            className={styles.contact__button}
            onClick={() => {
              document.getElementById("contactSection").scrollIntoView();
            }}
          >
            {t("contact")}
          </button>
        </div>
        <div className={styles.logo__container}>
          <img
            className={styles.logo}
            alt="Moio logo"
            src="/images/logo-white.png"
          />
          <div className={styles.divider}></div>
          <p className={styles.label}>build.</p>
        </div>
      </div>
      <div className={styles.ads__part}>
        <div className={styles.inner__content}>
          <p className={styles.description}>{t("adsDescription")}</p>
          <button
            className={styles.contact__button}
            onClick={() => {
              document.getElementById("contactSection").scrollIntoView();
            }}
          >
            {t("contact")}
          </button>
        </div>
        <div className={styles.logo__container}>
          <img
            className={styles.logo}
            alt="Moio logo"
            src="/images/logo-white.png"
          />
          <div className={styles.divider}></div>
          <p className={styles.label}>ads.</p>
        </div>
      </div>
    </section>
  );
};
