import { Container, Stack, Text } from '@mantine/core'
import { UiCode } from '../../../ui'

const tsxCode = `
import { WalletModalProvider, WalletMultiButton } from '@pubkeyapp/wallet-adapter-mantine-ui'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { clusterApiUrl } from '@solana/web3.js'

export function App() {
  const endpoint = clusterApiUrl('devnet')
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider>
        <WalletModalProvider>
          <WalletMultiButton />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
`

export function HomeUiExample() {
  return (
    <Container size="md">
      <Stack gap="lg">
        <Text>Install dependencies:</Text>
        <UiCode
          code={{
            fileName: 'yarn',
            code: `yarn add @pubkeyapp/wallet-adapter-mantine-ui @solana/wallet-adapter-react @solana/web3.js`,
            language: 'shell',
          }}
        />
        <Text>Configure providers and components:</Text>
        <UiCode
          code={{
            fileName: 'App.tsx',
            code: tsxCode,
            language: 'tsx',
          }}
        />
      </Stack>
    </Container>
  )
}
