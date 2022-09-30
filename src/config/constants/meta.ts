import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'DogeTrustSwap',
  description:
    '',
  image: 'https://DogeTrustSwap.net/images/hero.png',
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
        title: `${t('Home')} | ${t('DogeTrustSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('DogeTrustSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('DogeTrustSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('DogeTrustSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('DogeTrustSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('DogeTrustSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('DogeTrustSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('DogeTrustSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('DogeTrustSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('DogeTrustSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('DogeTrustSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('DogeTrustSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('DogeTrustSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('DogeTrustSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('DogeTrustSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('DogeTrustSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('DogeTrustSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('DogeTrustSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('DogeTrustSwap Info & Analytics')}`,
        description: 'View statistics for DogeTrustSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('DogeTrustSwap Info & Analytics')}`,
        description: 'View statistics for DogeTrustSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('DogeTrustSwap Info & Analytics')}`,
        description: 'View statistics for DogeTrustSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('DogeTrustSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('DogeTrustSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('DogeTrustSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('DogeTrustSwap')}`,
      }
    default:
      return null
  }
}
