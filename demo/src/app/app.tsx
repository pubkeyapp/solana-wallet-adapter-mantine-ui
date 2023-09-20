import './ui/theme/styles'
import { AppRoutes } from './app-routes'
import { UiHeader, UiThemeProvider } from './ui'

export function App() {
  return (
    <UiThemeProvider>
      <UiHeader />
      <AppRoutes />
    </UiThemeProvider>
  )
}
