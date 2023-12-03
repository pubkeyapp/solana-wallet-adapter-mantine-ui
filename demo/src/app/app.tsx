import './ui/theme/styles'
import { Loader } from '@mantine/core'
import { Suspense } from 'react'
import { AppRoutes } from './app-routes'
import { UiHeader, UiThemeProvider } from './ui'

export function App() {
  return (
    <UiThemeProvider>
      <UiHeader />
      <Suspense fallback={<Loader />}>
        <AppRoutes />
      </Suspense>
    </UiThemeProvider>
  )
}
