import { UiNotFound } from '@pubkey-ui/core'
import { useRoutes } from 'react-router-dom'
import { DemoRoutes } from './demo/feature'

export function AppRoutes() {
  return useRoutes([
    { index: true, element: <DemoRoutes /> },
    { path: '/*', element: <UiNotFound /> },
  ])
}
