import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = "Animechain-ai";
const projectName = "animechain-docs";

const config: Config = {
  title: 'Animechain.ai',
  tagline: '革新的なアニメ制作のためのAIソリューション',
  favicon: 'img/favicon.ico',

  url: `https://whitepaper.animechain.ai/`,
  baseUrl: `/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName,
  projectName,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'Animechain.ai Logo',
        src: 'img/logo_red.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction', // 正しいドキュメントIDを指定
          position: 'left',
          label: 'Whitepaper',
        },
        {
          href: '/pdf/Animechain_Whitepaper_v1.pdf',
          label: 'Download PDF',
          position: 'right',
          className: 'navbar__item--pdf',
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
              label: 'Official Site',
              href: 'https://animechain.ai/',
            },
            {
              label: 'WhitePaper',
              to: '/',
            },
            {
              label: 'Litepaper',
              to: 'https://animechain.ai/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Medium',
              href: 'https://medium.com/@anime_chain',
            },              
            {
              label: 'X(Twitter)',
              href: 'https://x.com/anime_chain',
            },
            {
              label: 'X(Twitter)(日本語)',
              href: 'https://x.com/anime_chain_jp',
            },
          ],
        },          
      ],
      copyright: `©︎Animechain LLC All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
