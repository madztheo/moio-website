import styles from "./Footer.module.scss";

export const Footer = ({ t }) => {
  return (
    <footer className={styles.website__footer}>
      <div className={styles.logo__container}>
        <img
          className={styles.logo}
          alt="Moio logo"
          src="/images/logo-white.png"
        />
        <div className={styles.divider}></div>
        <p className={styles.copyright}>
          {t("allRightsReserved", { date: new Date() })}
        </p>
      </div>
    </footer>
  );
};
