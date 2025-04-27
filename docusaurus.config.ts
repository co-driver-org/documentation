import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = "co-driver-org";
const projectName = "documentation";

const config: Config = {
  title: 'Co-Driver Developer Portal',
  tagline: 'Build with Co-Driver APIs',
  url: 'https://docs.codriver.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: '/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Co-Driver Dev',
      logo: {
        alt: 'Co-Driver Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/api-reference',
          label: 'API Reference',
          position: 'left',
        },
        {
          to: '/guides',
          label: 'Guides',
          position: 'left',
        },
        {
          to: '/sdk',
          label: 'SDK',
          position: 'left',
        },
        {
          href: `https://github.com/${organizationName}/${projectName}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/quickstarts/getting-started',
            },
            // {
            //   label: 'API Reference',
            //   to: '/api-reference',
            // },
            {
              label: 'SDK',
              to: '/sdk',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/co-driver',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/nakulshukla08/platform-backend',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/codriver',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Status',
              href: 'https://status.codriver.io',
            },
            {
              label: 'Blog',
              href: 'https://blog.codriver.io',
            },
            {
              label: 'GitHub',
              href: `https://github.com/${organizationName}/${projectName}`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Co-Driver, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml'],
    },
    search: {
      provider: 'local',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
