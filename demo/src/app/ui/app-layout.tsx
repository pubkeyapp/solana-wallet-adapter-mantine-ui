import { UiHeader, UiLayout, UiThemeProvider } from '@pubkey-ui/core'
import '@pubkey-ui/core/index.esm.css'
import { IconBrandDiscord, IconBrandGithub, IconBrandNpm } from '@tabler/icons-react'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AppHeaderLinks } from './app-header-links'

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <UiThemeProvider link={({ children, ...props }) => <Link {...props}>{children}</Link>}>
      <UiLayout
        header={
          <UiHeader
            profile={
              <AppHeaderLinks
                icons={[
                  { href: 'https://discord.gg/XxuZQeDPNf', icon: IconBrandDiscord },
                  { href: 'https://github.com/pubkeyapp/solana-wallet-adapter-mantine-ui', icon: IconBrandGithub },
                  { href: 'https://npm.im/@pubkeyapp/wallet-adapter-mantine-ui', icon: IconBrandNpm },
                ]}
              />
            }
          />
        }
      >
        {children}
      </UiLayout>
    </UiThemeProvider>
  )
}
