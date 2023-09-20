import { useRoutes } from 'react-router-dom'
import { HomeRoutes } from './home/feature'

export function AppRoutes() {
  return useRoutes([
    //
    { index: true, element: <HomeRoutes /> },
  ])
}
