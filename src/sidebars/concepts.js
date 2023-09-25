const concepts = [
    'concepts',
    'concepts/components',
    'concepts/object-model',
    {
        type: 'category',
        label: 'Object Ownership',
        link: {
            type: 'doc',
            id: 'concepts/object-ownership',
        },
        items: [
            'concepts/object-ownership/address-owned',
            'concepts/object-ownership/immutable',
            'concepts/object-ownership/shared',
            'concepts/object-ownership/wrapped',
        ]
    },
    {
        type: 'category',
        label: 'Dynamic Fields',
        link: {
            type: 'doc',
            id: 'concepts/dynamic-fields'
        },
        items: [
            'concepts/dynamic-fields/dynamic-object-fields',
            'concepts/dynamic-fields/tables-bags',
            'concepts/dynamic-fields/events',
            {
                type: 'category',
                label: 'Transfers',
                link: {
                    type: 'doc',
                    id: 'concepts/dynamic-fields/transfers',
                },
                items: [
                    'concepts/dynamic-fields/transfers/custom-rules',
                    'concepts/dynamic-fields/transfers/transfer-to-object',
                ]
            },
            'concepts/dynamic-fields/versioning',
        ]
    },
    {
        type: 'category',
        label: 'Transactions',
        link: {
            type: 'doc',
            id: 'concepts/transactions',
        },
        items: [
            'concepts/transactions/prog-txn-blocks',
            'concepts/transactions/input-types',
            'concepts/transactions/result-and-nested',
            {
                type: 'category',
                label: 'Transaction Types',
                link: {
                    type: 'doc',
                    id: 'concepts/transactions/transaction-types',
                },
                items: [
                   'concepts/transactions/transaction-types/move-call',
                   'concepts/transactions/transaction-types/transfer-object',
                   'concepts/transactions/transaction-types/split-coin',
                   'concepts/transactions/transaction-types/merge-coin', 
                ]
            },
            'concepts/transactions/sponsored-transactions',
            'concepts/transactions/gas-smashing',
            'concepts/transactions/transaction-lifecycle',
            'concepts/transactions/certification-overview',
        ]
    },
    {
        type: 'category',
        label: 'Cryptography',
        link: {
            type: 'doc',
            id: 'concepts/cryptography',
        },
        items: [
            {
                type: 'category',
                label: 'Transaction Authentication',
                link: {
                    type: 'doc',
                    id: 'concepts/cryptography/transaction-auth',
                },
                items: [
                    'concepts/cryptography/transaction-auth/keys-addresses',
                    'concepts/cryptography/transaction-auth/signatures',
                    'concepts/cryptography/transaction-auth/multi-sig',
                    'concepts/cryptography/transaction-auth/offline-signing',
                    'concepts/cryptography/transaction-auth/intent-signing',
                ]
            },
            'concepts/cryptography/zklogin',
            {
                type: 'category',
                label: 'Smart Contracts',
                link: {
                    type: 'doc',
                    id: 'concepts/cryptography/smart-contracts',
                },
                items: [
                    'concepts/cryptography/smart-contracts/signing',
                    'concepts/cryptography/smart-contracts/groth16',
                    'concepts/cryptography/smart-contracts/hashing',
                    'concepts/cryptography/smart-contracts/signing',
                ]
            },
            {
                type: 'category',
                label: 'System',
                link: {
                    type: 'doc',
                    id: 'concepts/cryptography/system',
                },
                items: [
                    'concepts/cryptography/system/validator-signatures',
                    'concepts/cryptography/system/intents-for-validation',
                    'concepts/cryptography/system/checkpoint-verification',
                ]
            },
        ]
    },
    {
        type: 'category',
        label: 'Sui Architecture',
        link: {
            type: 'doc',
            id: 'concepts/sui-architecture',
        },
        items: [
            'concepts/sui-architecture/consensus',
            'concepts/sui-architecture/confirmation',
            'concepts/sui-architecture/indexer-functions',
            'concepts/sui-architecture/epochs',
            'concepts/sui-architecture/protocol-upgrades',
            'concepts/sui-architecture/data-management',
        ]
    },
    {
        type: 'category',
        label: 'Tokenomics',
        link: {
            type: 'doc',
            id: 'concepts/tokenomics',
        },
        items: [
            'concepts/tokenomics/proof-of-stake',
            'concepts/tokenomics/validators-staking',
            'concepts/tokenomics/staking-unstaking',
            'concepts/tokenomics/sui-token',
            'concepts/tokenomics/storage-fund',
            'concepts/tokenomics/gas-pricing',
            'concepts/tokenomics/gas-in-sui',
        ]
    }
    
]
module.exports = concepts;