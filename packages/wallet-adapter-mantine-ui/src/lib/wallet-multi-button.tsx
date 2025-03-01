import { Button, Menu } from '@mantine/core'
import { useWallet } from '@solana/wallet-adapter-react'
import React, { useCallback, useMemo, useState } from 'react'
import { useWalletModal } from './use-wallet-modal'
import type { WalletButtonProps } from './wallet-button-props'
import { WalletConnectButton } from './wallet-connect-button'
import { WalletIcon } from './wallet-icon'
import { IconCopy, IconLogout, IconSwitchHorizontal } from './wallet-icons'
import { WalletModalButton } from './wallet-modal-button'

export function WalletMultiButton({ children, ...props }: WalletButtonProps) {
  const { publicKey, wallet, disconnect } = useWallet()
  const { setVisible } = useWalletModal()
  const [copied, setCopied] = useState(false)

  const base58 = useMemo(() => publicKey?.toBase58(), [publicKey])
  const content = useMemo(() => {
    if (children) return children
    if (!wallet || !base58) return null
    return base58.slice(0, 4) + '..' + base58.slice(-4)
  }, [children, wallet, base58])

  const copyAddress = useCallback(async () => {
    if (base58) {
      await navigator.clipboard.writeText(base58)
      setCopied(true)
      setTimeout(() => setCopied(false), 400)
    }
  }, [base58])

  const openModal = useCallback(() => {
    setVisible(true)
  }, [setVisible])

  if (!wallet) return <WalletModalButton {...props}>{children}</WalletModalButton>
  if (!base58) return <WalletConnectButton {...props}>{children}</WalletConnectButton>

  return (
    <Menu withArrow offset={3}>
      <Menu.Target>
        <Button leftSection={<WalletIcon wallet={wallet} size={props.size} />} px="sm" {...props}>
          {content}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={copyAddress} leftSection={<IconCopy size={16} />}>
          {copied ? 'Copied' : 'Copy address'}
        </Menu.Item>
        <Menu.Item onClick={openModal} leftSection={<IconSwitchHorizontal size={16} />}>
          Change wallet
        </Menu.Item>
        <Menu.Item onClick={disconnect} leftSection={<IconLogout size={16} />}>
          Disconnect
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
