import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'KruegerSwap',
  description:
    '',
  image: 'https://KruegerSwap.net/images/hero.png',
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
        title: `${t('Home')} | ${t('KruegerSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('KruegerSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('KruegerSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('KruegerSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('KruegerSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('KruegerSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('KruegerSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('KruegerSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('KruegerSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('KruegerSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('KruegerSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('KruegerSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('KruegerSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('KruegerSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('KruegerSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('KruegerSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('KruegerSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('KruegerSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('KruegerSwap Info & Analytics')}`,
        description: 'View statistics for KruegerSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('KruegerSwap Info & Analytics')}`,
        description: 'View statistics for KruegerSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('KruegerSwap Info & Analytics')}`,
        description: 'View statistics for KruegerSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('KruegerSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('KruegerSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('KruegerSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('KruegerSwap')}`,
      }
    default:
      return null
  }
}
