import { Container, Stack } from '@mantine/core'
import { HomeUiExample } from '../ui'
import { HomeUiHero } from '../ui/hero/home-ui-hero'

import { WalletModalProvider, WalletMultiButton } from '@pubkeyapp/wallet-adapter-mantine-ui'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { clusterApiUrl } from '@solana/web3.js'

export function HomeFeature() {
  const endpoint = clusterApiUrl('devnet')
  return (
    <Container size="xl">
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]}>
          {/*test*/}
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
