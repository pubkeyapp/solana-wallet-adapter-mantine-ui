import { UiStack } from '@pubkey-ui/core'
import { useState } from 'react'
import { AppAutoConnect, AppContainer, AppNavButtons, AppTitle } from '../../ui'
import { VerifyUiWizard } from './verify-ui-wizard'
import { clusterApiUrl } from '@solana/web3.js'
import { SolanaWalletProvider } from '@pubkeyapp/wallet-adapter-mantine-ui'

export default function GettingStartedRoutes() {
  const [autoConnect, setAutoConnect] = useState(false)
  return (
    <AppContainer>
      <SolanaWalletProvider autoConnect={autoConnect} endpoint={clusterApiUrl('devnet')}>
        <UiStack gap="xl">
          <AppTitle
            title="Verify Wallet"
            subtitle="This example shows how to build a wizard for verifying a Solana wallet."
          />
          <AppAutoConnect autoConnect={autoConnect} setAutoConnect={setAutoConnect} mx="auto" />
          <VerifyUiWizard />
        </UiStack>
      </SolanaWalletProvider>
      <AppNavButtons left={{ label: 'Components', to: '/components' }} />
    </AppContainer>
  )
}
