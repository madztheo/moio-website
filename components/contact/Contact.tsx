import { useState } from "react";
import styles from "./Contact.module.scss";

const sendMail = async (params) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!res.ok) {
      throw { ...data, status: res.status };
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const Contact = ({ t }) => {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [sendingMail, setSendingMail] = useState(false);

  const sendContactMail = async (e) => {
    e.preventDefault();
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      alert(t("emailInvalid"));
      return;
    }
    try {
      setSendingMail(true);
      const res = (await sendMail({
        email,
        name,
        company,
        message: contactMessage,
      })) as { success: boolean };
      setSendingMail(false);
      if (res.success) {
        alert(t("messageSent"));
      } else if (!res.success) {
        alert(t("unableToSendMessage"));
      }
    } catch (error) {
      setSendingMail(false);
      alert(t("unableToSendMessage"));
    }
  };

  return (
    <section id="contactSection" className={styles.contact__section}>
      <p className={styles.contact__title}>{t("projectInMind")}</p>
      <p className={styles.contact__subtitle}>{t("contactSubtitle")}</p>
      <form onSubmit={sendContactMail}>
        <div className={styles.inputs__wrapper}>
          <div className={styles.input__container}>
            <label htmlFor="name">{t("name")}</label>
            <input
              name="name"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.input__container}>
            <label htmlFor="company">{t("company")}</label>
            <input
              type="text"
              name="company"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputs__wrapper}>
          <div className={styles.input__container}>
            <label htmlFor="email">{t("email")}</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputs__wrapper}>
          <div className={styles.input__container}>
            <label htmlFor="contactMessage">{t("message")}</label>
            <textarea
              name="contactMessage"
              id="contactMessage"
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
            />
          </div>
        </div>
        <button
          disabled={sendingMail}
          type="submit"
          className={styles.submit__button}
        >
          {sendingMail ? t("sending") : t("send")}
        </button>
      </form>
    </section>
  );
};
