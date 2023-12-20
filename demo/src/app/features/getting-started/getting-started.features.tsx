import { UiStack } from '@pubkey-ui/core'
import { AppContainer, AppNavButtons, AppTitle } from '../../ui'
import { GettingStartedUiInstallation } from './getting-started-ui-installation'
import { GettingStartedUiVersions } from './getting-started-ui-versions'

export default function GettingStartedFeatures() {
  return (
    <AppContainer>
      <UiStack>
        <AppTitle title="Getting Started" subtitle="Learn how to install and use the UI components in your app" />
        <GettingStartedUiInstallation />
        <GettingStartedUiVersions />
      </UiStack>
      <AppNavButtons right={{ label: 'Components', to: '/components' }} />
    </AppContainer>
  )
}
