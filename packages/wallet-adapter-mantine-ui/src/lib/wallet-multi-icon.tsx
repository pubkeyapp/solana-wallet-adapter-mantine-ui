import { ActionIcon, ActionIconProps, Image, MantineSize, Menu, Tooltip } from '@mantine/core'
import { useWallet } from '@solana/wallet-adapter-react'
import React, { MouseEventHandler, useCallback, useMemo, useState } from 'react'
import { useWalletModal } from './use-wallet-modal'
import { convertSize } from './wallet-icon'
import { IconCopy, IconCurrencySolana, IconLogout, IconSwitchHorizontal } from './wallet-icons'

export function WalletMultiIcon(props: ActionIconProps & { iconSize?: number }) {
  const size = props.size ?? 'lg'
  const iconSize = props.iconSize ?? convertSize(size as MantineSize)
  const { connecting, connected, wallet, connect, disconnect, publicKey } = useWallet()
  const { setVisible } = useWalletModal()
  const [copied, setCopied] = useState(false)

  const base58 = useMemo(() => publicKey?.toBase58(), [publicKey])

  const copyAddress = useCallback(async () => {
    if (base58) {
      await navigator.clipboard.writeText(base58)
      setCopied(true)
      setTimeout(() => setCopied(false), 400)
    }
  }, [base58])
  const content = useMemo(() => {
    if (!wallet || !base58) return null
    return base58.slice(0, 4) + '..' + base58.slice(-4)
  }, [wallet, base58])

  const openModal = useCallback(() => {
    setVisible(true)
  }, [setVisible])

  const connectWallet: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (!wallet) {
        openModal()
        return
      }
      if (!event.defaultPrevented) {
        connect().catch(() => {
          void 0
        })
      }
    },
    [connect, wallet, openModal],
  )

  return connected ? (
    <Menu withArrow offset={3}>
      <Menu.Target>
        <Tooltip label={`Connected to ${wallet?.adapter.name}: ${content}`}>
          <ActionIcon size={size} color="brand" variant="subtle" {...props}>
            <Image src={wallet?.adapter.icon} height={iconSize} width={iconSize} />
          </ActionIcon>
        </Tooltip>
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
  ) : (
    <Tooltip label="Connect Solana Wallet">
      <ActionIcon
        loading={connecting}
        size={size}
        color="brand"
        variant={connecting ? 'light' : 'light'}
        onClick={connectWallet}
        {...props}
      >
        <IconCurrencySolana size={iconSize} />
      </ActionIcon>
    </Tooltip>
  )
}
