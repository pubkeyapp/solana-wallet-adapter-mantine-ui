import { Container, Group, Text } from '@mantine/core'
import { IconBrandDiscord, IconBrandGithub, IconRocket } from '@tabler/icons-react'
import { UiIconLink, UiIconLinkProps } from '../icon-link/ui-icon-link'
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
        <Group>
          <IconRocket size={28} />
          <Text size="lg" fw={700} className={classes.title}>
            Solana Wallet Adapter for Mantine
          </Text>
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
