import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'The USDB Stablecoin',
  bodyText: 'With our own stablecoin that is always pegged to Binance USD Stablecoin, helps the protocol to protect liquidity providers impermanent loss',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  
  images: {
    path: '/images/home/',
    attributes: [
      { src: '/images/home/YuklaBUSD.png', alt: 'BTC token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'High-Yield Passive Income',
  bodyText: 'BearSwap incentivizes liquidity providers with high yield farms and pools as a reward for securing the BearSwap protocol',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },

  images: {
    path: '/images/home/',
    attributes: [
      { src: '/images/home/YuklaUSDT.png', alt: 'Stocks chart' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'Community Voting',
  bodyText:
    'BearSwap is governed by its community members who can create & vote on important token proposals',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x35eD5E1017d10B7fE5f4cD493fB197DD7632dfd1',
    text: 'Buy LunaFlare',
    external: false,
  },

  images: {
    path: '/images/home/',
    attributes: [
      { src: '/images/home/YuklaBNB.png', alt: 'BERRIES token' }
    ],
  },
}
