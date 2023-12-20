import { Code, Group, rem, SimpleGrid, Stack, Switch, Title } from '@mantine/core'
import { UiStack } from '@pubkey-ui/core'
import {
  WalletDisconnectButton,
  WalletModalButton,
  WalletMultiButton,
  WalletMultiIcon,
} from '@pubkeyapp/wallet-adapter-mantine-ui'
import { ReactNode } from 'react'

export function ExamplesUiComponents({
  autoConnect,
  setAutoConnect,
}: {
  autoConnect: boolean
  setAutoConnect: (c: boolean) => void
}) {
  return (
    <UiStack>
      <Title style={{ textAlign: 'center', fontWeight: 800, fontSize: rem(40) }}>Components</Title>
      <Group justify="center">
        <Switch
          checked={autoConnect}
          onChange={() => setAutoConnect(!autoConnect)}
          label="Set the WalletProvider's autoConnect prop"
        />
      </Group>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <DemoCard title="WalletMultiButton">
          <WalletMultiButton size="lg" />
        </DemoCard>
        <DemoCard title="WalletDisconnectButton">
          <WalletDisconnectButton size="lg" />
        </DemoCard>
        <DemoCard title="WalletModalButton">
          <WalletModalButton size="lg" />
        </DemoCard>
        <DemoCard title="WalletMultiIcon">
          <WalletMultiIcon size="lg" />
        </DemoCard>
      </SimpleGrid>
      <DemoCard title="WalletMultiButton sizes">
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          <WalletMultiButton size="xs" />
          <WalletMultiButton size="sm" />
          <WalletMultiButton size="md" />
          <WalletMultiButton size="lg" />
          <WalletMultiButton size="xl" />
        </SimpleGrid>
      </DemoCard>
      <DemoCard title="WalletMultiIcon sizes">
        <Group justify="center">
          <WalletMultiIcon size="xs" />
          <WalletMultiIcon size="sm" />
          <WalletMultiIcon size="md" />
          <WalletMultiIcon size="lg" />
          <WalletMultiIcon size="xl" />
        </Group>
      </DemoCard>
    </UiStack>
  )
}

function DemoCard({ children, title }: { children: ReactNode; title: string }) {
  return (
    <Stack p="md" style={{ textAlign: 'center' }} gap="md" align="center">
      <Group align="center">
        <Code style={{ fontSize: 16 }}>{title}</Code>
      </Group>
      {children}
    </Stack>
  )
}
