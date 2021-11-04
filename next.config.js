module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    domains: [
      {
        domain: "website.com",
        defaultLocale: "en",
      },
      {
        domain: "website.fr",
        defaultLocale: "fr",
      },
    ],
  },
};
