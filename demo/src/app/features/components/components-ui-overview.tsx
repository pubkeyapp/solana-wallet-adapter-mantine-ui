import { Group, SimpleGrid } from '@mantine/core'
import { UiStack } from '@pubkey-ui/core'
import {
  WalletDisconnectButton,
  WalletModalButton,
  WalletMultiButton,
  WalletMultiIcon,
} from '@pubkeyapp/wallet-adapter-mantine-ui'
import { AppDemo } from '../../ui'

export function ComponentsUiOverview() {
  return (
    <UiStack>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <AppDemo title="WalletMultiButton">
          <WalletMultiButton size="lg" />
        </AppDemo>
        <AppDemo title="WalletDisconnectButton">
          <WalletDisconnectButton size="lg" />
        </AppDemo>
        <AppDemo title="WalletModalButton">
          <WalletModalButton size="lg" />
        </AppDemo>
        <AppDemo title="WalletMultiIcon">
          <WalletMultiIcon size="lg" />
        </AppDemo>
      </SimpleGrid>
      <AppDemo title="WalletMultiButton sizes">
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          <WalletMultiButton size="xs" />
          <WalletMultiButton size="sm" />
          <WalletMultiButton size="md" />
          <WalletMultiButton size="lg" />
          <WalletMultiButton size="xl" />
        </SimpleGrid>
      </AppDemo>
      <AppDemo title="WalletMultiIcon sizes">
        <Group justify="center">
          <WalletMultiIcon size="xs" />
          <WalletMultiIcon size="sm" />
          <WalletMultiIcon size="md" />
          <WalletMultiIcon size="lg" />
          <WalletMultiIcon size="xl" />
        </Group>
      </AppDemo>
    </UiStack>
  )
}
