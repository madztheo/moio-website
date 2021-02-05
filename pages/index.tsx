import Head from "next/head";
import { Contact } from "../components/contact/Contact";
import { Cover } from "../components/cover/Cover";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Projects } from "../components/projects/Projects";
import { Services } from "../components/services/Services";
import { Team } from "../components/team/Team";
import { Technologies } from "../components/technologies/Technologlies";
const { withTranslation } = require("../i18n");

const App = ({ t }) => {
  return (
    <>
      <Head>
        <title>{t("websiteTitle")}</title>
        <meta name="description" content={t("teamDescription")}></meta>
      </Head>
      <div className="main-container">
        <Header t={t} />
        <Cover t={t} />
        <Services t={t} />
        <Projects t={t} />
        <Team t={t} />
        <Technologies />
        <Contact t={t} />
        <Footer t={t} />
      </div>
    </>
  );
};

/**
 * To be changed with next-i18next v8.0 that will
 * integrate with the native support of localization brought
 * by Next.js 10 (along with some Hooks)
 */
export default withTranslation("common")(App);
