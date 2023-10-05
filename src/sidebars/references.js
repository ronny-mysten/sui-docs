const references = [
    {
        type: 'doc',
        label: 'References',
        id: 'references',
    },
    {
        type: "category",
        label: 'JSON RPC',
        link: {
          type: 'doc',
          id: 'references/json-rpc/json-rpc-format'
        },
        items: [
          /*{
            type: 'link',
            label: 'API Reference',
            href: '/sui-api'
          },*/
          'references/json-rpc/rpc-api',
        ]
    },
    {
      type: 'category',
      label: "Sui CLI",
      link: {
        type: 'doc',
        id: 'references/cli'
      },
      items: [
        'references/cli/client',
        'references/cli/console',
        'references/cli/keytool',
        'references/cli/move',
        'references/cli/validator',
      ],
    },
    {
      type: 'category',
      label: 'Sui SDKs',
      link: {
        type: 'doc',
        id: 'references/sui-sdks'
      },
      items: [
        'references/sdk/ts-sdk',
        'references/sdk/rust-sdk',
      ],
    },
    'references/dapp-kit',
    {
      type: 'category',
      label: 'Sui Move',
      link: {
        type: 'doc',
        id: 'references/sui-move'
      },
      items: [
        'references/move/differences',
        'references/move/init',
        'references/move/entry-functions',
        'references/move/strings',
        'references/move/one-time-witness',
        'references/move/collections',
        {
          type: 'category',
          label: 'Packages',
          link: {
            type: 'doc',
            id: 'references/move/packages',
          },
          items: [
            'references/move/packages/move-toml',
            'references/move/packages/move-lock',
            'references/move/packages/upgrades',
            'references/move/packages/custom-policies',
          ]
        },
        {
          type: 'category',
          label: 'Patterns',
          link: {
            type: 'doc',
            id: 'references/move/patterns'
          },
          items: [
            'references/move/patterns/capabilities',
            'references/move/patterns/witness',
            'references/move/patterns/transferrable-witness',
            'references/move/patterns/hot-potato',
            'references/move/patterns/id-pointer',
            'references/move/patterns/app-extensions',
          ],
        },
        'references/move/language',
      ],
    },
  ]

  module.exports = references;