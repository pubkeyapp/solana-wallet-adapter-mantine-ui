import { UiStack } from '@pubkey-ui/core'
import { useState } from 'react'
import { AppAutoConnect, AppContainer, AppNavButtons, AppSolanaProviders, AppTitle } from '../../ui'
import { VerifyUiWizard } from './verify-ui-wizard'

export default function GettingStartedRoutes() {
  const [autoConnect, setAutoConnect] = useState(false)
  return (
    <AppContainer>
      <AppSolanaProviders autoConnect={autoConnect}>
        <UiStack gap="xl">
          <AppTitle
            title="Verify Wallet"
            subtitle="This example shows how to build a wizard for verifying a Solana wallet."
          />
          <AppAutoConnect autoConnect={autoConnect} setAutoConnect={setAutoConnect} mx="auto" />
          <VerifyUiWizard />
        </UiStack>
      </AppSolanaProviders>
      <AppNavButtons left={{ label: 'Components', to: '/components' }} />
    </AppContainer>
  )
}
