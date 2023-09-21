import { ActionIconProps, Container, Group, Text } from '@mantine/core'
import { IconBrandDiscord, IconBrandGithub, IconBrandNpm } from '@tabler/icons-react'
import { UiIconLink, UiIconLinkProps } from '../icon-link/ui-icon-link'
import { UiLogo } from '../logo/ui-logo'
import { UiThemeToggle } from '../theme-toggle/ui-theme-toggle'
import classes from './ui-header.module.css'

const icons: UiIconLinkProps[] = [
  { href: 'https://discord.gg/XxuZQeDPNf', icon: IconBrandDiscord },
  { href: 'https://github.com/pubkeyapp/solana-wallet-adapter-mantine-ui', icon: IconBrandGithub },
  { href: 'https://npm.im/@pubkeyapp/wallet-adapter-mantine-ui', icon: IconBrandNpm },
]

export function UiHeader() {
  const iconProps: ActionIconProps = { variant: 'light', size: 'xl' }
  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Group gap="xs" align="center">
          <UiLogo height={32} />
          <Text visibleFrom="xs" fw={500}>
            Wallet Adapter for Mantine
          </Text>
        </Group>
        <Group gap={5}>
          {icons.map((icon) => (
            <UiIconLink key={icon.href} {...icon} {...iconProps} />
          ))}
          <UiThemeToggle {...iconProps} />
        </Group>
      </Container>
    </header>
  )
}
