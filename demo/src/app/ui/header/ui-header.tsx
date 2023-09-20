import { Container, Group, Text } from '@mantine/core'
import { IconBrandDiscord, IconBrandGithub } from '@tabler/icons-react'
import { UiIconLink, UiIconLinkProps } from '../icon-link/ui-icon-link'
import { UiLogo } from '../logo/ui-logo'
import { UiThemeToggle } from '../theme-toggle/ui-theme-toggle'
import classes from './ui-header.module.css'

const icons: UiIconLinkProps[] = [
  { href: 'https://discord.gg/XxuZQeDPNf', icon: IconBrandDiscord },
  { href: 'https://github.com/pubkeyapp/solana-wallet-adapter-mantine-ui', icon: IconBrandGithub },
]

export function UiHeader() {
  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Group gap="xs" align="center">
          <UiLogo height={32} />
          <Text fw={500}>Wallet Adapter for Mantine</Text>
        </Group>
        <Group gap={5} visibleFrom="xs">
          {icons.map((icon) => (
            <UiIconLink key={icon.href} {...icon} />
          ))}
          <UiThemeToggle />
        </Group>
      </Container>
    </header>
  )
}
