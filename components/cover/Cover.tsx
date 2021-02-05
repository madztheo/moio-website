import { ImageComparator } from "../image-comparator/ImageComparator";
import styles from "./Cover.module.scss";
const { Trans } = require("../../i18n");

const BackgroundImages = () => {
  return (
    <>
      <img
        alt=""
        src="/images/io-green.png"
        className={styles.bg__logo}
        style={{
          top: "0",
          left: "13%",
          width: "70px",
          height: "70px",
          opacity: "0.1",
        }}
      />
      <img
        alt=""
        src="/images/io-green.png"
        className={styles.bg__logo}
        style={{
          top: "0px",
          right: "5%",
          width: "70px",
          height: "70px",
          opacity: "0.1",
        }}
      />
      <img
        alt=""
        src="/images/io-orange.png"
        className={styles.bg__logo}
        style={{
          top: "20%",
          right: "45%",
          width: "70px",
          height: "70px",
          opacity: "0.1",
        }}
      />
      <img
        alt=""
        src="/images/io-orange.png"
        className={styles.bg__logo}
        style={{
          bottom: "30px",
          left: "10%",
          width: "120px",
          height: "120px",
          opacity: "0.1",
          transform: "rotate(-200deg)",
        }}
      />
      <img
        alt=""
        src="/images/io-green.png"
        className={styles.bg__logo}
        style={{
          bottom: "15%",
          left: "40%",
          width: "60px",
          height: "60px",
          opacity: "0.2",
          transform: "rotate(-200deg)",
        }}
      />
      <img
        alt=""
        src="/images/io-orange.png"
        className={styles.bg__logo}
        style={{
          bottom: "20%",
          right: "-40px",
          width: "120px",
          height: "120px",
          opacity: "0.3",
        }}
      />
      <img
        alt=""
        src="/images/io-orange.png"
        className={styles.bg__logo}
        style={{
          top: "10%",
          left: "20%",
          width: "100px",
          height: "100px",
          opacity: "0.02",
          transform: "rotate(-200deg)",
        }}
      />
    </>
  );
};

export const Cover = ({ t }) => {
  return (
    <section id="coverSection" className={styles.cover__container}>
      <BackgroundImages />
      <div className={styles.left__part}>
        <div className={styles.cover__content}>
          <p className={styles.title}>
            <Trans i18nKey="designBuild">
              <span className="design-color">d</span>esign
              <span className="design-color">. </span>
              <span className="build-color">b</span>uild
              <span className="build-color">.</span>
            </Trans>
          </p>
          <p className={styles.subtitle}>
            <Trans i18nKey="slogan">
              We transform your projects into
              <b>amazing user experience (Web or Mobile).</b>
            </Trans>
          </p>
          <div className={styles.buttons__container}>
            <button
              onClick={() => {
                document.getElementById("projectsSection").scrollIntoView();
              }}
              className={styles.explore__button}
            >
              {t("explore")}
            </button>
            <button
              className={styles.contact__button}
              onClick={() => {
                document.getElementById("contactSection").scrollIntoView();
              }}
            >
              {t("contact")}
            </button>
          </div>
        </div>
        <div className={styles.metrics__container}>
          <div className={styles.metrics}>
            <i className="fas fa-rocket"></i>
            <div className={styles.texts}>
              <p className={styles.number}>{t("plusYear", { count: 5 })}</p>
              <p className={styles.label}>{t("experience")}</p>
            </div>
          </div>
          <div className={styles.metrics}>
            <i className="fas fa-code"></i>
            <div className={styles.texts}>
              <p className={styles.number}>{t("plusMillion", { count: 1 })}</p>
              <p className={styles.label}>{t("linesCode")}</p>
            </div>
          </div>
          <div className={styles.metrics}>
            <i className="fas fa-mug-hot"></i>
            <div className={styles.texts}>
              <p className={styles.number}>+4000</p>
              <p className={styles.label}>{t("oolongTea")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right__part}>
        <ImageComparator
          topImage="/images/phone-design.png"
          bottomImage="/images/phone-code.png"
          width="37.1vh"
          height="70vh"
          vertical={true}
        />
      </div>
    </section>
  );
};
