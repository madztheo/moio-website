const moment = require("moment");
import "moment/locale/fr";
moment.locale("fr");
const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const path = require("path");

module.exports = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["fr"],
  localeSubpaths,
  localePath: path.resolve("./public/static/locales"),
  interpolation: {
    escapeValue: false, // Not needed for react as it escapes by default
    format: function (value, format, lng) {
      let lang = "en-US";
      if (lng.startsWith("fr")) {
        lang = "fr-FR";
      }
      moment.locale(lang);
      if (value instanceof Date || value instanceof moment)
        return moment(value).format(format);
      if (format === "duration") return moment.duration(value).humanize();
      return value;
    },
  },
});
