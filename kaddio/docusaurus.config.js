// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kaddio Docs',
  tagline: 'All help in one place',
  url: 'https://documentaion.onrender.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kaddio', // Usually your GitHub org/user name.
  // projectName: 'doc', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sv', 'es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'Kaddio Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'https://kaddio.com/img/kaddio-logo.png',
        },
        items: [
          {
            sidebarId: 'tutorialSidebar',
            type: 'docSidebar',
            docId: 'intro',
            position: 'left',
            label: 'Guides',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docSidebar',
            to: '/docs/category/api', 
            label: 'API', 
            position: 'left',
            sidebarId: 'api'
          },
          {
            to: 'support', 
            label: 'Support', 
            position: 'left'
          },
          // {to: '/faq', label: 'FAQ', position: 'left'},
          {
            href: 'https://demo.kaddio.com',
            label: 'Live Demo',
            position: 'right',
          },
          // {
          //   href: 'https://github.com/kaddio/doc',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          {
            type: 'localeDropdown',
            position: 'right'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/kaddio',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kaddio/doc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kaddio AB`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
