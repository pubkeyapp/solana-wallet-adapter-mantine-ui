import { UiStack } from '@pubkey-ui/core'
import { useState } from 'react'
import { AppAutoConnect, AppContainer, AppNavButtons, AppTitle } from '../../ui'
import { ComponentsUiOverview } from './components-ui-overview'
import { SolanaWalletProvider } from '@pubkeyapp/wallet-adapter-mantine-ui'
import { clusterApiUrl } from '@solana/web3.js'

export default function ComponentsFeatures() {
  const [autoConnect, setAutoConnect] = useState(true)
  return (
    <AppContainer>
      <SolanaWalletProvider autoConnect={autoConnect} endpoint={clusterApiUrl('devnet')}>
        <UiStack gap="xl">
          <AppTitle title="Components" subtitle="Components to use in your app" />
          <AppAutoConnect autoConnect={autoConnect} setAutoConnect={setAutoConnect} mx="auto" />
          <ComponentsUiOverview />
        </UiStack>
      </SolanaWalletProvider>
      <AppNavButtons
        left={{ label: 'Getting Started', to: '/getting-started' }}
        right={{ label: 'Wizard', to: '/verify' }}
      />
    </AppContainer>
  )
}
