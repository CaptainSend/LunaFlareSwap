import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'LunaFlare',
  description:
    '',
  image: 'https://LunaFlare.net/images/hero.png',
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
        title: `${t('Home')} | ${t('LunaFlare')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('LunaFlare')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('LunaFlare')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('LunaFlare')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('LunaFlare')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('LunaFlare')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('LunaFlare')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('LunaFlare')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('LunaFlare')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('LunaFlare')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('LunaFlare')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('LunaFlare')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('LunaFlare')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('LunaFlare')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('LunaFlare')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('LunaFlare')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('LunaFlare')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('LunaFlare')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('LunaFlare Info & Analytics')}`,
        description: 'View statistics for LunaFlare exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('LunaFlare Info & Analytics')}`,
        description: 'View statistics for LunaFlare exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('LunaFlare Info & Analytics')}`,
        description: 'View statistics for LunaFlare exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('LunaFlare')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('LunaFlare')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('LunaFlare')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('LunaFlare')}`,
      }
    default:
      return null
  }
}
