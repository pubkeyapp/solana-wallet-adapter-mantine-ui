import { Container, Group, Text } from '@mantine/core'
import { UiLogoType } from '@pubkey-ui/core'
import { IconBrandDiscord, IconBrandGithub, IconBrandNpm } from '@tabler/icons-react'
import { UiHeaderLinks } from './ui-header-links'
import classes from './ui-header.module.css'

export function UiAppHeader() {
  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Group gap="xs" align="center">
          <UiLogoType height={32} />
          <Text visibleFrom="xs" fw={500}>
            Wallet Adapter for Mantine
          </Text>
        </Group>
        <UiHeaderLinks
          icons={[
            { href: 'https://discord.gg/XxuZQeDPNf', icon: IconBrandDiscord },
            { href: 'https://github.com/pubkeyapp/solana-wallet-adapter-mantine-ui', icon: IconBrandGithub },
            { href: 'https://npm.im/@pubkeyapp/wallet-adapter-mantine-ui', icon: IconBrandNpm },
          ]}
        />
      </Container>
    </header>
  )
}
