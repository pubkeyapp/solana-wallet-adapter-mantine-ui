import { UiStack } from '@pubkey-ui/core'
import { useState } from 'react'
import { AppAutoConnect, AppContainer, AppNavButtons, AppSolanaProviders, AppTitle } from '../../ui'
import { ComponentsUiOverview } from './components-ui-overview'

export default function ComponentsFeatures() {
  const [autoConnect, setAutoConnect] = useState(true)
  return (
    <AppContainer>
      <AppSolanaProviders autoConnect={autoConnect}>
        <UiStack gap="xl">
          <AppTitle title="Components" subtitle="Components to use in your app" />
          <AppAutoConnect autoConnect={autoConnect} setAutoConnect={setAutoConnect} mx="auto" />
          <ComponentsUiOverview />
        </UiStack>
      </AppSolanaProviders>
      <AppNavButtons
        left={{ label: 'Getting Started', to: '/getting-started' }}
        right={{ label: 'Wizard', to: '/verify' }}
      />
    </AppContainer>
  )
}
