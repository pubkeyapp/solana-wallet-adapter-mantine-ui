import { lazy } from 'react'

export const DemoRoutes = lazy(() => import('./examples/examples.features'))
export const GettingStartedRoutes = lazy(() => import('./getting-started/getting-started.features'))
export const VersionsRoutes = lazy(() => import('./versions/versions.features'))
