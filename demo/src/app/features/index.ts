import { lazy } from 'react'

export const DemoRoutes = lazy(() => import('./components/components.features'))
export const GettingStartedRoutes = lazy(() => import('./getting-started/getting-started.features'))
export const VersionsRoutes = lazy(() => import('./verify/verify.features'))
