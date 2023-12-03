import { Avatar, Button, ButtonProps, Group, Image, Stack, Text, Title } from '@mantine/core'
import { WalletAdapter } from '@solana/wallet-adapter-base'
import { GlowWalletAdapter } from '@solana/wallet-adapter-glow'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
import { registerWalletAdapter, SOLANA_MAINNET_CHAIN } from '@solana/wallet-standard'
import {
  useWallets,
  useWallet,
  WalletProvider,
  WalletsProvider,
  useConnect,
  useDisconnect,
  WalletStandardProvider,
} from '@wallet-standard/react'
import type { ReactNode } from 'react'
import React, { useEffect } from 'react'

export default function WalletStandardFeature() {
  return (
    <WalletStandardProvider>
      <Content />
    </WalletStandardProvider>
  )
}

export function Content() {
  const connected = useIsConnected()
  const { wallet } = useWallet()

  useEffect(() => {
    if (!wallet?.accounts?.length) return
    for (const walletAccount of wallet.accounts) {
      console.log(walletAccount.address)
      console.log(walletAccount.publicKey.toString())
    }
  }, [wallet?.accounts])

  return (
    <Stack>
      <Title>WalletStandardFeature</Title>

      {connected ? (
        <Stack>
          <div>Connected to {wallet?.name} </div>
          {/*<pre>{JSON.stringify({ accounts: wallet?.accounts }, null, 2)}</pre>*/}
          <WalletDisconnectButton />n
        </Stack>
      ) : (
        <Stack>
          <WalletList />
          <WalletDetail />
        </Stack>
      )}
    </Stack>
  )
}

function SolanaWalletStandardProvider({ children }: { children: NonNullable<ReactNode> }) {
  useEffect(() => {
    const adapters: WalletAdapter[] = [
      //
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
    ]
    const destructors = adapters.map((adapter) => registerWalletAdapter(adapter, SOLANA_MAINNET_CHAIN))
    return () => destructors.forEach((destroy) => destroy())
  }, [])

  return (
    <WalletsProvider>
      <WalletProvider>{children}</WalletProvider>
    </WalletsProvider>
  )
}

function WalletList() {
  const { wallets } = useWallets()
  const { setWallet, wallet } = useWallet()

  return (
    <Stack>
      {wallets.map((item, index) => (
        <Group key={index}>
          <Button
            leftSection={<Image height={28} src={item.icon} alt={item.name} />}
            variant={wallet === item ? 'filled' : 'outline'}
            size="xl"
            fullWidth
            onClick={() => setWallet(item)}
          >
            <Text size="xl">{item.name}</Text>
          </Button>
        </Group>
      ))}
    </Stack>
  )
}
function WalletDetail() {
  const { wallet } = useWallet()
  return wallet ? (
    <div>
      <WalletConnectButton />
      <pre>{JSON.stringify(wallet.name, null, 2)}</pre>
    </div>
  ) : (
    <div>Wallet not connected</div>
  )
}

export function WalletConnectButton() {
  const { wallet } = useWallet()
  const { connect, waiting } = useConnect()

  if (!connect || !wallet) return null
  return (
    <Button size="xl" onClick={() => connect()}>
      Connect
    </Button>
  )
}

export function WalletDisconnectButton() {
  const { wallet } = useWallet()

  const { disconnect, waiting } = useDisconnect()

  if (!disconnect || !wallet) return null
  return (
    <Button size="xl" onClick={() => disconnect()}>
      Disconnect
    </Button>
  )
}

export function useIsConnected() {
  const { accounts } = useWallet()
  return accounts.length > 0
}
