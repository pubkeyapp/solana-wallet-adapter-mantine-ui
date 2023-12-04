import { Container, Stack } from '@mantine/core'
import { WalletModalProvider } from '@pubkeyapp/wallet-adapter-mantine-ui'
import { BackpackWalletAdapter } from '@solana/wallet-adapter-backpack'
import { GlowWalletAdapter } from '@solana/wallet-adapter-glow'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { clusterApiUrl } from '@solana/web3.js'
import { HomeUiExample, HomeUiHero } from '../ui'

export function HomeFeature() {
  return (
    <Container size="xl">
      <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
        <WalletProvider
          wallets={[
            new BackpackWalletAdapter(),
            new GlowWalletAdapter(),
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter(),
          ]}
        >
          <WalletModalProvider>
            <Stack gap="xl">
              <HomeUiHero />
              <HomeUiExample />
            </Stack>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </Container>
  )
}
