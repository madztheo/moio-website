import styles from "./Technologies.module.scss";

export const Technologies = () => {
  return (
    <section id="technologiesSection" className={styles.tech__container}>
      <img
        title="ReactJS"
        className={styles.tech__logo}
        alt="ReactJS logo"
        src="/images/react-logo.png"
      />
      <img
        title="Javascript"
        className={styles.tech__logo}
        alt="Javascript logo"
        src="/images/js-logo.png"
      />
      <img
        title="TypeScript"
        className={styles.tech__logo}
        alt="TypeScript logo"
        src="/images/ts-logo.png"
      />
      <img
        title="Adobe Photoshop"
        className={styles.tech__logo}
        alt="Adobe Photoshop logo"
        src="/images/photoshop-logo.png"
      />
      <img
        title="Adobe Illustrator"
        className={styles.tech__logo}
        alt="Adobe Illustrator logo"
        src="/images/illustrator-logo.png"
      />
      <img
        title="Adobe XD"
        className={styles.tech__logo}
        alt="Adobe XD logo"
        src="/images/adobexd-logo.png"
      />
    </section>
  );
};
