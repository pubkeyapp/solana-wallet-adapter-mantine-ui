import { Box, Button, Collapse, Group, Stack, Text } from '@mantine/core'
import { WalletName, WalletReadyState } from '@solana/wallet-adapter-base'
import type { Wallet } from '@solana/wallet-adapter-react'
import { useWallet } from '@solana/wallet-adapter-react'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import React, { useCallback, useMemo, useState } from 'react'
import { MouseClickPayload } from './interfaces'

import { useWalletModal } from './use-wallet-modal'
import { WalletListItem } from './wallet-list-item'
import { WalletSVG } from './wallet-svg'

export interface WalletModalProps {
  className?: string
}

export function WalletModal(props: WalletModalProps) {
  const { wallets, select } = useWallet()
  const { setVisible } = useWalletModal()
  const [expanded, setExpanded] = useState(false)

  const [listedWallets, collapsedWallets] = useMemo<[Wallet[], Wallet[]]>(() => {
    const installed: Wallet[] = []
    const loadable: Wallet[] = []
    const notDetected: Wallet[] = []

    for (const wallet of wallets) {
      if (wallet.readyState === WalletReadyState.NotDetected) {
        notDetected.push(wallet)
      } else if (wallet.readyState === WalletReadyState.Loadable) {
        loadable.push(wallet)
      } else if (wallet.readyState === WalletReadyState.Installed) {
        installed.push(wallet)
      }
    }

    let listed: Wallet[] = []
    let collapsed: Wallet[] = []

    if (installed.length) {
      listed = installed
      collapsed = [...loadable, ...notDetected]
    } else if (loadable.length) {
      listed = loadable
      collapsed = notDetected
    } else {
      collapsed = notDetected
    }

    return [listed, collapsed]
  }, [wallets])

  const hideModal = useCallback(() => {
    // setFadeIn(false)
    setTimeout(() => setVisible(false), 150)
  }, [setVisible])

  const handleClose = useCallback(
    (event: { preventDefault: () => void }) => {
      event.preventDefault()
      hideModal()
    },
    [hideModal],
  )

  const handleWalletClick = useCallback(
    (event: MouseClickPayload, walletName: WalletName) => {
      select(walletName)
      handleClose(event)
    },
    [select, handleClose],
  )

  const handleCollapseClick = useCallback(() => setExpanded(!expanded), [expanded])

  return (
    <Box {...props}>
      {listedWallets.length ? (
        <>
          <Box mx="xl">
            <Text size="xl">Connect a wallet on Solana to continue</Text>
          </Box>

          <Stack mt="lg">
            {listedWallets.map((wallet) => (
              <Box key={wallet.adapter.name}>
                <WalletListItem
                  wallet={wallet}
                  handleClick={(event: MouseClickPayload) => handleWalletClick(event, wallet.adapter.name)}
                />
              </Box>
            ))}

            {collapsedWallets.length ? (
              <Collapse in={expanded}>
                {collapsedWallets.map((wallet) => (
                  <Box key={wallet.adapter.name}>
                    <WalletListItem
                      wallet={wallet}
                      handleClick={(event: MouseClickPayload) => handleWalletClick(event, wallet.adapter.name)}
                    />
                  </Box>
                ))}
              </Collapse>
            ) : null}
            {collapsedWallets.length ? (
              <Button
                fullWidth
                variant="outline"
                onClick={handleCollapseClick}
                tabIndex={0}
                rightSection={expanded ? <IconChevronUp /> : <IconChevronDown />}
              >
                {expanded ? 'Less ' : 'More '}options
              </Button>
            ) : null}
          </Stack>
        </>
      ) : (
        <Box>
          <Box mx="xl">
            <Text size="lg" ta="center">
              You'll need a wallet on Solana to continue
            </Text>
          </Box>
          <Group justify="center" my="xl">
            <WalletSVG />
          </Group>
          {collapsedWallets.length ? (
            <Stack mt="xl">
              <Button
                fullWidth
                variant="outline"
                onClick={handleCollapseClick}
                tabIndex={0}
                rightSection={expanded ? <IconChevronUp /> : <IconChevronDown />}
              >
                {expanded ? 'Hide ' : 'Already have a wallet? View '}options
              </Button>
              <Collapse in={expanded}>
                {collapsedWallets.map((wallet) => (
                  <Box key={wallet.adapter.name}>
                    <WalletListItem
                      wallet={wallet}
                      handleClick={(event: MouseClickPayload) => handleWalletClick(event, wallet.adapter.name)}
                    />
                  </Box>
                ))}
              </Collapse>
            </Stack>
          ) : null}
        </Box>
      )}
    </Box>
  )
}
