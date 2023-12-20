import { AppContainer, AppNavButtons } from '../../ui'
import { VersionsUiTable } from './versions-ui-table'

export default function GettingStartedRoutes() {
  return (
    <AppContainer>
      <VersionsUiTable />
      <AppNavButtons left={{ label: 'Examples', to: '/examples' }} />
    </AppContainer>
  )
}
