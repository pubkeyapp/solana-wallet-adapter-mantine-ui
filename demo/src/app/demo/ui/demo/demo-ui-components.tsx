import { Code, Group, rem, SimpleGrid, Stack, Switch, Title } from '@mantine/core'
import { UiStack } from '@pubkey-ui/core'
import {
  WalletDisconnectButton,
  WalletModalButton,
  WalletMultiButton,
  WalletMultiIcon,
} from '@pubkeyapp/wallet-adapter-mantine-ui'
import { ReactNode } from 'react'

export function DemoUiComponents({
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
      <SimpleGrid cols={{ base: 1, md: 3 }}>
        <DemoCard title="<WalletMultiButton />">
          <div>
            <WalletMultiButton size="lg" />
          </div>
        </DemoCard>
        <DemoCard title="<WalletDisconnectButton />">
          <div>
            <WalletDisconnectButton size="lg" />
          </div>
        </DemoCard>
        <DemoCard title="<WalletModalButton />">
          <div>
            <WalletModalButton size="lg" />
          </div>
        </DemoCard>
      </SimpleGrid>
      <DemoCard title="<WalletMultiButton size='' />">
        <Group justify="center">
          <WalletMultiButton size="xs" />
          <WalletMultiButton size="sm" />
          <WalletMultiButton size="md" />
          <WalletMultiButton size="lg" />
          <WalletMultiButton size="xl" />
        </Group>
      </DemoCard>
      <DemoCard title="<WalletMultiIcon size='' />">
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
