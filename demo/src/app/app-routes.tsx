import { UiNotFound, UiThemeLink } from '@pubkey-ui/core'
import { Link, useRoutes } from 'react-router-dom'
import { HomeRoutes } from './home/feature'

export function AppRoutes() {
  return useRoutes([
    //
    { index: true, element: <HomeRoutes /> },
    { path: '*', element: <UiNotFound /> },
  ])
}

export const ThemeLink: UiThemeLink = ({ children, ...props }) => <Link {...props}>{children}</Link>
