import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'index',
    {
      type: 'category',
      label: 'API',
      link: {
        type: 'doc',
        id: 'api/index',
      },
      items: [
        {
          type: 'category',
          label: 'API V1',
          link: {
            type: 'doc',
            id: 'api/v1/index',
          },
          items: [
            'api/v1/home',
            'api/v1/scopes',
            {
              type: 'category',
              label: 'Endpoints',
              link: {
                type: 'doc',
                id: 'api/v1/endpoints/index',
              },
              items: [
                'api/v1/endpoints/misc',
                'api/v1/endpoints/user',
                'api/v1/endpoints/post',
                'api/v1/endpoints/reply',
                'api/v1/endpoints/profile',
                'api/v1/endpoints/feed',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'OAuth',
      link: {
        type: 'doc',
        id: 'oauth/index',
      },
      items: [
        {
          type: 'category',
          label: 'OAuth V1',
          link: {
            type: 'doc',
            id: 'oauth/v1/index',
          },
          items: [
            {
              type: 'category',
              label: 'Home',
              link: {
                type: 'doc',
                id: 'oauth/v1/home/index',
              },
              items: [
                'oauth/v1/home/how',
              ],
            },
          ],
        },
      ],
    },
    'websocket',
    {
      type: 'category',
      label: 'Caturra Guidelines',
      link: {
        type: 'doc',
        id: 'guidelines/index',
      },
      items: [
        'guidelines/reports-guidelines',
      ],
    },
  ],
};

export default sidebars;
