import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: true,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      }
    ],
  },
  {
    label: 'More',
    href: '#',
    icon: 'More',
    hideSubNav: false,
    items: [
      {
        label: t('Telegram Community'),
        href: 'https://t.me/DogeTrustInfo',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Crosschain Bridge'),
        href: 'https://bridge.bearswap.net',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      }
    ],
  },
]

export default config
