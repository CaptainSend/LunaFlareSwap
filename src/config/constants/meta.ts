import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MiniRippleSwap',
  description:
    '',
  image: 'https://MiniRippleSwap.net/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MiniRippleSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('MiniRippleSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('MiniRippleSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('MiniRippleSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('MiniRippleSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('MiniRippleSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MiniRippleSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MiniRippleSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('MiniRippleSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MiniRippleSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('MiniRippleSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MiniRippleSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MiniRippleSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MiniRippleSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MiniRippleSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('MiniRippleSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('MiniRippleSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('MiniRippleSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('MiniRippleSwap Info & Analytics')}`,
        description: 'View statistics for MiniRippleSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('MiniRippleSwap Info & Analytics')}`,
        description: 'View statistics for MiniRippleSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('MiniRippleSwap Info & Analytics')}`,
        description: 'View statistics for MiniRippleSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('MiniRippleSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('MiniRippleSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('MiniRippleSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('MiniRippleSwap')}`,
      }
    default:
      return null
  }
}
