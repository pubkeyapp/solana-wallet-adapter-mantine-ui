import { rem, Text, Title } from '@mantine/core'
import { UiStack } from '@pubkey-ui/core'
import { UiCode } from '../../../ui/app-code'

const demo = `
import { WalletModalProvider, WalletMultiButton } from '@pubkeyapp/wallet-adapter-mantine-ui'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { clusterApiUrl } from '@solana/web3.js'

export function App() {
  return (
    <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
      <WalletProvider>
        <WalletModalProvider>
          <WalletMultiButton />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
`

export function DemoUiInstallation() {
  const deps = '@pubkeyapp/wallet-adapter-mantine-ui @solana/wallet-adapter-react @solana/web3.js'
  return (
    <UiStack mt="xl">
      <Title style={{ textAlign: 'center', fontWeight: 800, fontSize: rem(40) }}>Installation</Title>
      <Text>Install dependencies:</Text>
      <UiStack>
        <UiCode code={{ fileName: 'npm', code: `npm install ${deps}`, language: 'shell' }} />
        <UiCode code={{ fileName: 'pnpm', code: `pnpm add ${deps}`, language: 'shell' }} />
        <UiCode code={{ fileName: 'yarn', code: `yarn add ${deps}`, language: 'shell' }} />
      </UiStack>
      <Text>Configure providers and components:</Text>
      <UiCode
        code={{
          fileName: 'app.tsx',
          code: demo,
          language: 'tsx',
        }}
      />
    </UiStack>
  )
}
