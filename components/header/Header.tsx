import { useState } from "react";
import styles from "./Header.module.scss";
import cn from "classnames";

export const Header = ({ t }) => {
  const [menuToggled, setMenuToggled] = useState(false);

  return (
    <header className={styles.website__header}>
      <img className={styles.logo} alt="" src="/images/logo-green.png" />
      <nav
        className={cn(styles.header__nav, {
          [styles.toggled]: menuToggled,
        })}
      >
        <button
          onClick={() => setMenuToggled(false)}
          className={styles.close__button}
        >
          <i className="fas fa-times"></i>
        </button>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <a onClick={() => setMenuToggled(false)} href="#projectsSection">
              {t("project", { count: 2 })}
            </a>
          </li>
          <li className={styles.list__item}>
            <a onClick={() => setMenuToggled(false)} href="#teamSection">
              {t("whoAreWe")}
            </a>
          </li>
          <li className={styles.list__item}>
            <a onClick={() => setMenuToggled(false)} href="#contactSection">
              {t("contact")}
            </a>
          </li>
        </ul>
      </nav>
      {!menuToggled && (
        <button
          onClick={() => setMenuToggled(true)}
          className={styles.menu__button}
        >
          <i className={cn("fas", "fa-bars", styles.menu__icon)}></i>
        </button>
      )}
    </header>
  );
};
