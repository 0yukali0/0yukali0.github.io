// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '騰的學習筆記網站',
  tagline: '更新Ray、Kubernetes生態系、Hadoop生態系',
  //favicon: 'img/favicon.ico',

  url: 'https://0yukali0.github.io',
  baseUrl: '/',
  projectName: "0YUKALI0@GITHUB",
  organizationName: '0YUKALI0',
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'tw-cn',
    locales: ['tw-cn'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/0yukali0/0yukali0.github.io',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/0yukali0/0yukali0.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Yuteng',
        logo: {
          alt: 'Yuteng ico',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文檔',
          },
          {
            to: '/blog',
            label: '部落格',
          },
          {
            href: 'https://github.com/0yukali0/0yukali0.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Linkedin',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/yuteng-chen-452473254/',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} Yuteng memo. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
