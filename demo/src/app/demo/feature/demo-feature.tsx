import { Container, Stack } from '@mantine/core'
import { WalletModalProvider } from '@pubkeyapp/wallet-adapter-mantine-ui'
import { GlowWalletAdapter } from '@solana/wallet-adapter-glow'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare'
import { clusterApiUrl } from '@solana/web3.js'
import { useState } from 'react'
import { DemoUi, HomeUiHero } from '../ui'

export function DemoFeature() {
  const [autoConnect, setAutoConnect] = useState(true)
  return (
    <Container size="xl">
      <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
        <WalletProvider
          autoConnect={autoConnect}
          wallets={[new GlowWalletAdapter(), new PhantomWalletAdapter(), new SolflareWalletAdapter()]}
        >
          <WalletModalProvider>
            <Stack gap="xl">
              <HomeUiHero />
              <DemoUi autoConnect={autoConnect} setAutoConnect={setAutoConnect} />
            </Stack>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </Container>
  )
}
