import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'KreugerSwap',
  description:
    '',
  image: 'https://KreugerSwap.net/images/hero.png',
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
        title: `${t('Home')} | ${t('KreugerSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('KreugerSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('KreugerSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('KreugerSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('KreugerSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('KreugerSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('KreugerSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('KreugerSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('KreugerSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('KreugerSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('KreugerSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('KreugerSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('KreugerSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('KreugerSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('KreugerSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('KreugerSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('KreugerSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('KreugerSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('KreugerSwap Info & Analytics')}`,
        description: 'View statistics for KreugerSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('KreugerSwap Info & Analytics')}`,
        description: 'View statistics for KreugerSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('KreugerSwap Info & Analytics')}`,
        description: 'View statistics for KreugerSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('KreugerSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('KreugerSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('KreugerSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('KreugerSwap')}`,
      }
    default:
      return null
  }
}
