import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Concepts',
      collapsed: true,
      items: [
        'concepts/api-governance',
      ],
    },
    {
      type: 'category',
      label: 'Guides & Tutorials',
      collapsed: true,
      items: [
        'guides/api-management',
        'guides/subscription',
        'guides/sdk-usage',
        'guides/security',
        'guides/analytics',
      ],
    },
    {
      type: 'category',
      label: 'Quickstart Guides',
      collapsed: true,
      items: [
        'quickstarts/getting-started',
        'quickstarts/setup-mock-server',
        'quickstarts/integrating-sdk',
        'quickstarts/deploying-api',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: true,
      items: [
        'api-reference/authentication',
        'api-reference/api-management',
        'api-reference/subscription',
      ],
    },
    {
      type: 'category',
      label: 'SDK Reference',
      collapsed: true,
      items: [
        'sdk/java-sdk',
        'sdk/python-sdk',
        'sdk/node-sdk',
      ],
    },
    {
      type: 'category',
      label: 'Developer Hub',
      collapsed: true,
      items: [
        'developer-hub/community',
        'developer-hub/best-practices',
      ],
    },
    {
      type: 'category',
      label: 'Videos & Tutorials',
      collapsed: true,
      items: [
        'videos/getting-started',
        'videos/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Community & Support',
      collapsed: true,
      items: [
        'community/forum',
        'community/faqs',
      ],
    },
  ],
};

export default sidebars;