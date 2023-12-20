import { UiNotFound } from '@pubkey-ui/core'
import { Navigate, useRoutes } from 'react-router-dom'

import { DemoRoutes, GettingStartedRoutes, VersionsRoutes } from './features'

export function AppRoutes() {
  return useRoutes([
    { index: true, element: <Navigate to="/getting-started" /> },
    { path: '/getting-started', element: <GettingStartedRoutes /> },
    { path: '/components', element: <DemoRoutes /> },
    { path: '/verify', element: <VersionsRoutes /> },
    { path: '/*', element: <UiNotFound /> },
  ])
}
