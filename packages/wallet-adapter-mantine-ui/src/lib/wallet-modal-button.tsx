import { Button } from '@mantine/core'
import type { MouseEvent } from 'react'
import React, { useCallback } from 'react'
import { useWalletModal } from './use-wallet-modal'
import type { WalletButtonProps } from './wallet-button-props'

export function WalletModalButton({ children = 'Select Wallet', onClick, ...props }: WalletButtonProps) {
  const { visible, setVisible } = useWalletModal()

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (onClick) onClick(event)
      if (!event.defaultPrevented) setVisible(!visible)
    },
    [onClick, setVisible, visible],
  )

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}
