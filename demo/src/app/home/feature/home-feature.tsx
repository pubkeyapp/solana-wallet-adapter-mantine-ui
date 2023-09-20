import { Container, Stack } from '@mantine/core'

import { WalletModalProvider } from '@pubkeyapp/wallet-adapter-mantine-ui'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { clusterApiUrl } from '@solana/web3.js'
import { HomeUiExample } from '../ui'
import { HomeUiHero } from '../ui/hero/home-ui-hero'

export function HomeFeature() {
  return (
    <Container size="xl">
      <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
        <WalletProvider wallets={[]}>
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
