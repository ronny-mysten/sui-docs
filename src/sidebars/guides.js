const guides = [
    {
        type: 'doc',
        label: 'Guides',
        id: 'guides',
    },
    {
        type: 'category',
        label: 'Developer Guides',
        link: {
          type: 'doc',
          id: 'guides/developer',
        },
        items: [
          {
            type: 'category',
            label: 'Getting Started',
            link: {
                type: 'doc',
                id: 'guides/developer/getting-started',
            },
            items: [
                'guides/developer/getting-started/sui-monorepo',
                'guides/developer/getting-started/sui-install',
                'guides/developer/getting-started/sui-environment',
                'guides/developer/getting-started/connect',
                'guides/developer/getting-started/get-address',
                'guides/developer/getting-started/get-coins',
            ]
          },
          {
            type: 'category',
            label: 'Your First Sui dApp',
            link: {
                type: 'doc',
                id: 'guides/developer/first-app',
            },
            items: [
                'guides/developer/first-app/build-test',
                'guides/developer/first-app/publish',
                'guides/developer/first-app/upgrade',
                'guides/developer/first-app/debug',
                'guides/developer/first-app/client-tssdk',
            ]
          },
          {
            type: 'category',
            label: 'Sui 101',
            link: {
              type: 'doc',
              id: 'guides/developer/sui-101'
            },
            items: [
              'guides/developer/sui-101/shared-owned',
              'guides/developer/sui-101/create-coin',
              'guides/developer/sui-101/create-nft',
              'guides/developer/sui-101/using-events',
              'guides/developer/sui-101/access-time',
              'guides/developer/sui-101/send-txn',
              'guides/developer/sui-101/sign-txn',
              'guides/developer/sui-101/sponsor-txn',
              'guides/developer/sui-101/coin-mgt',
              'guides/developer/sui-101/working-with-ptbs',
              'guides/developer/sui-101/building-ptb',
              'guides/developer/sui-101/simulating-refs',
            ]
          },
          {
            type: 'category',
            label: 'Advanced Topics',
            link: {
              type: 'doc',
              id: 'guides/developer/advanced'
            },
            items: [
              'guides/developer/advanced/efficient-smart-contracts',
              'guides/developer/advanced/min-gas-fees',
              'guides/developer/advanced/wallet-integrations',
              'guides/developer/advanced/security-best-practices',
              'guides/developer/advanced/maximize-reach',
            ]
          },
        ],
      },
      'guides/developer/starter-templates',
      'guides/developer/zklogin-onboarding',
      {
        type: 'category',
        label: 'App Examples',
        link: {
          type: 'doc',
          id: 'guides/developer/app-examples',
        },
        items: [
          'guides/developer/app-examples/auction',
          'guides/developer/app-examples/escrow',
          'guides/developer/app-examples/trusted-swap',
          'guides/developer/app-examples/tic-tac-toe',
          'guides/developer/app-examples/trusted-swap',
          'guides/developer/app-examples/turnip-town',
          'guides/developer/app-examples/weather-oracle',
          'guides/developer/app-examples/meta-pricing-oracle',
          'guides/developer/app-examples/coin-flip',
          'guides/developer/app-examples/blackjack',
        ],
      },
      {
        type: 'category',
        label: 'Operator Guides',
        link: {
            type: 'doc',
            id: 'guides/operator',
        },
        items: [
            'guides/operator/sui-full-node',
            'guides/operator/validator-config',
            'guides/operator/data-management',
            'guides/operator/snapshots',
            'guides/operator/archives',
            'guides/operator/genesis',
            'guides/operator/validator-committee',
            'guides/operator/validator-tasks',
            'guides/operator/staking-rewards',
            'guides/operator/node-tools',
        ]
      }
]
module.exports = guides;