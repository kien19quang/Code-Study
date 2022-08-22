// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Code Study",
  tagline: "Trau dồi kiến thức mỗi ngày",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon:
    "https://res.cloudinary.com/ddsypxjol/image/upload/v1660923085/Learn-NextJS/Logo_hfhwok.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "Code Study", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "vn",
    locales: ["vn"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
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
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Code Study",
        logo: {
          alt: "Code Study",
          src: "https://res.cloudinary.com/ddsypxjol/image/upload/v1660923085/Learn-NextJS/Logo_hfhwok.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/kien19quang",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Kết nối",
            items: [
              {
                label: "Facebook cá nhân",
                href: "https://www.facebook.com/kien19quang",
              },

              {
                label: "Github",
                href: "https://github.com/kien19quang",
              },
            ],
          },
          {
            title: "Những khóa đã học",
            items: [
              {
                label: "Fullstack - Zero to Hero",
                href: "https://fullstack.edu.vn/",
              },
              {
                label: "Chuyên sâu về Frontend - Easy Frontend",
                href: "https://www.youtube.com/c/EasyFrontend",
              },
              {
                label: "Cấu trúc dữ liệu và giải thuật",
                href: "https://28tech.com.vn/cau-truc-du-lieu-va-giai-thuat.html",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Code Study, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
