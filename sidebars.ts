import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Solutions Provided by Animechain.ai',
      items: [
        'solutions/copyright-cleared-ai',
        'solutions/anima-blockchain',
        'solutions/aira',
        'solutions/ai-orchestration',
      ],
    },
    {
      type: 'category',
      label: 'Animechain.ai\'s AI Technology',
      items: [
        'ai-technology/ai-basics',
        'ai-technology/anime-specific-ai',
        'ai-technology/copyright-cleared-data',
        'ai-technology/ai-orchestration',
        'ai-technology/anime-production-workflow',
      ],
    },
    {
      type: 'category',
      label: 'Animechain.ai\'s Layer 2: Anima Blockchain',
      items: [
        'blockchain-technology/data-traceability',
        'blockchain-technology/layer2-solution',
        'blockchain-technology/aira-rights-management',
      ],
    },
    {
      type: 'category',
      label: 'Ecosystem and Token Economy',
      items: [
        'ecosystem/overview',
        'ecosystem/token-utility',
        'ecosystem/token-economy',
      ],
    },
    'roadmap',
    'team',
    'risks',
  ],
};

export default sidebars;
