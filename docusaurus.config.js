// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ai暗記カード",
  tagline: "シンプルな暗記カードアプリ",
  favicon: "img/favicon.ico",

  // Github pages デプロイ用の設定
  url: "https://ankidoc.site/",
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kou72", // Usually your GitHub org/user name.
  projectName: "ai_flash_card", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/ai_flash_card_imgcard.png",
      navbar: {
        title: "Ai暗記カード",
        logo: {
          alt: "Logo",
          src: "img/icon.svg",
        },
        items: [
          { to: "/terms", label: "利用規約", position: "right" },
          { to: "/privacy", label: "プライバシーポリシー", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            label: "Homepage",
            to: "https://portfolio.skapp.dev/",
          },
          {
            label: "GitHub",
            to: "https://github.com/kou72",
          },
          {
            label: "X (Twitter)",
            to: "https://twitter.com/kou7273",
          },
        ],
        copyright: `© ${new Date().getFullYear()} kou72.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
