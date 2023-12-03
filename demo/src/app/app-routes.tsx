import { useRoutes } from 'react-router-dom'
import { HomeRoutes } from './home/feature'
import { WalletRoutes } from './wallet-standard'

export function AppRoutes() {
  return useRoutes([
    //
    { index: true, element: <HomeRoutes /> },
    { path: 'wallet-standard', element: <WalletRoutes /> },
  ])
}
