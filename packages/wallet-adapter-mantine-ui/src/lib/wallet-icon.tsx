import { ButtonProps, Image, ImageProps } from '@mantine/core'
import type { Wallet } from '@solana/wallet-adapter-react'
import React from 'react'

export interface WalletIconProps extends ImageProps {
  wallet: Wallet | null
  size?: ButtonProps['size']
}

export function WalletIcon({ wallet, ...props }: WalletIconProps) {
  const size = convertSize(props.size)
  return wallet ? (
    <Image src={wallet.adapter.icon} alt={`${wallet.adapter.name} icon`} height={size} width={size} {...props} />
  ) : null
}

export function convertSize(size?: ButtonProps['size']): number {
  switch (size) {
    case 'xs':
      return 16
    case 'sm':
      return 20
    case 'md':
      return 28
    case 'lg':
      return 32
    case 'xl':
      return 38
    default:
      return 28
  }
}
