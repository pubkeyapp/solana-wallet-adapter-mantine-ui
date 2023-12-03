import { UiLayout, UiThemeProvider } from '@pubkey-ui/core'
import { AppRoutes } from './app-routes'
import { UiAppHeader } from './ui/header/ui-app-header'

export function App() {
  return (
    <UiThemeProvider>
      <UiLayout header={<UiAppHeader />}>
        <AppRoutes />
      </UiLayout>
    </UiThemeProvider>
  )
}
