const config: Config = {
title: 'Co-Driver Docs',
url: 'https://co-driver-org.github.io',  // ✅ Ensure this is correct
baseUrl: '/docs/',  // ✅ Ensure this is /docs/ for GitHub Pages
projectName: 'documentation',
organizationName: 'co-driver-org',
trailingSlash: false,

presets: [
[
'classic',
{
docs: {
path: 'docs',
routeBasePath: '/',  // ✅ Ensures content is served correctly under /docs/
sidebarPath: require.resolve('./sidebars.ts'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Co-Driver',
      logo: {
        alt: 'Co-Driver Logo',
        src: '/img/logo.svg',  // ✅ Fix image path
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },  // ✅ Fix relative paths
      ],
    },
  },

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
};

export default config;
