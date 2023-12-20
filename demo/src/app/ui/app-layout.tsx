import { UiHeader, UiLayout, UiStack, UiThemeProvider } from '@pubkey-ui/core'
import '@pubkey-ui/core/index.esm.css'
import { IconBrandDiscord, IconBrandGithub, IconBrandNpm, IconBrandX } from '@tabler/icons-react'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AppHeaderLinks } from './app-header-links'
import { AppHero } from './app-hero'

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <UiThemeProvider link={({ children, ...props }) => <Link {...props}>{children}</Link>}>
      <UiLayout
        header={
          <UiHeader
            links={[
              { link: '/getting-started', label: 'Getting Started' },
              { link: '/examples', label: 'Examples' },
              { link: '/versions', label: 'Versions' },
            ]}
            profile={
              <AppHeaderLinks
                icons={[
                  { href: 'https://discord.gg/XxuZQeDPNf', icon: IconBrandDiscord },
                  { href: 'https://github.com/pubkeyapp/solana-wallet-adapter-mantine-ui', icon: IconBrandGithub },
                  { href: 'https://x.com/PubKeyApp', icon: IconBrandX },
                  { href: 'https://npm.im/@pubkeyapp/wallet-adapter-mantine-ui', icon: IconBrandNpm },
                ]}
              />
            }
          />
        }
      >
        <UiStack>
          <AppHero />
          {children}
        </UiStack>
      </UiLayout>
    </UiThemeProvider>
  )
}
