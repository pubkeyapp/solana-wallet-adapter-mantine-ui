import { AppContainer, AppNavButtons } from '../../ui'
import { GettingStartedUiInstallation } from './getting-started-ui-installation'

export default function GettingStartedFeatures() {
  return (
    <AppContainer>
      <GettingStartedUiInstallation />
      <AppNavButtons right={{ label: 'Examples', to: '/examples' }} />
    </AppContainer>
  )
}
