import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Caturra Docs',
  tagline: 'The API-First Social Network Built for Developers.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.caturra.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'Caturra',
  projectName: 'documentation',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  // Configured default locale to British English (en-GB)
  i18n: {
    defaultLocale: 'en-GB',
    locales: ['en-GB'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/CaturraSocial/documentation/tree/main/',
          versions: {
            current: {
              label: 'Dev',
              path: 'dev',
            },
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/caturra-social-card.jpg',
    colorMode: {
      defaultMode: 'dark', // Default to dark mode to match Caturra.app dark design style
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Caturra',
      logo: {
        alt: 'Caturra Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/changelog', label: 'Changelog', position: 'left'},

        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/CaturraSocial/documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Public Documentation',
              to: '/docs/',
            },
            {
              label: 'API Reference',
              to: '/docs/api/',
            },
            {
              label: 'Changelog',
              to: '/changelog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/CaturraSocial',
            },
          ],
        },

      ],
      copyright: `Copyright © ${new Date().getFullYear()} Caturra. Built by developers, for developers.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
