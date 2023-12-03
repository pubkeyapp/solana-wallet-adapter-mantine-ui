import { Button } from '@mantine/core'
import { useWallet } from '@solana/wallet-adapter-react'
import type { MouseEventHandler } from 'react'
import React, { useCallback, useMemo } from 'react'
import type { WalletButtonProps } from './wallet-button-props'
import { WalletIcon } from './wallet-icon'

export function WalletDisconnectButton({ children, disabled, onClick, ...props }: WalletButtonProps) {
  const { wallet, disconnect, disconnecting } = useWallet()

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (onClick) onClick(event)
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      if (!event.defaultPrevented) disconnect().catch(() => {})
    },
    [onClick, disconnect],
  )

  const content = useMemo(() => {
    if (children) return children
    if (disconnecting) return 'Disconnecting ...'
    if (wallet) return 'Disconnect'
    return 'Disconnect Wallet'
  }, [children, disconnecting, wallet])

  return (
    <Button
      disabled={disabled || !wallet}
      leftSection={wallet ? <WalletIcon wallet={wallet} size={props.size} /> : undefined}
      onClick={handleClick}
      px="sm"
      {...props}
    >
      {content}
    </Button>
  )
}
