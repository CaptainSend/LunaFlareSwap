import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'RippleBurnReflectSwap',
  description:
    '',
  image: 'https://RippleBurnReflectSwap.net/images/hero.png',
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
        title: `${t('Home')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('RippleBurnReflectSwap Info & Analytics')}`,
        description: 'View statistics for RippleBurnReflectSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('RippleBurnReflectSwap Info & Analytics')}`,
        description: 'View statistics for RippleBurnReflectSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('RippleBurnReflectSwap Info & Analytics')}`,
        description: 'View statistics for RippleBurnReflectSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('RippleBurnReflectSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('RippleBurnReflectSwap')}`,
      }
    default:
      return null
  }
}
