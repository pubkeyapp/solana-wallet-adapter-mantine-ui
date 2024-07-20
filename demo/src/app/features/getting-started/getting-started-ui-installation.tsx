import { Text } from '@mantine/core'
import { UiStack } from '@pubkey-ui/core'
import { UiCode } from '../../ui'

const demoWrapper = `
import { SolanaWalletProvider, WalletMultiButton } from '@pubkeyapp/wallet-adapter-mantine-ui'
import { clusterApiUrl } from '@solana/web3.js'

export function App() {
  return (
    <SolanaWalletProvider endpoint={clusterApiUrl('devnet')}>
      {/* Your app here */}
      <WalletMultiButton />
    </SolanaWalletProvider>
  )
}
`

const demo = `
import { WalletModalProvider, WalletMultiButton } from '@pubkeyapp/wallet-adapter-mantine-ui'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { clusterApiUrl } from '@solana/web3.js'

export function App() {
  return (
    <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
      <WalletProvider wallets={[]}>
        <WalletModalProvider>
          {/* Your app here */}
          <WalletMultiButton />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
`

export function GettingStartedUiInstallation() {
  const deps = '@pubkeyapp/wallet-adapter-mantine-ui @solana/wallet-adapter-react @solana/web3.js'
  return (
    <UiStack>
      <Text>Install dependencies:</Text>
      <UiStack>
        <UiCode code={{ fileName: 'npm', code: `npm install ${deps}`, language: 'shell' }} />
        <UiCode code={{ fileName: 'pnpm', code: `pnpm add ${deps}`, language: 'shell' }} />
        <UiCode code={{ fileName: 'yarn', code: `yarn add ${deps}`, language: 'shell' }} />
      </UiStack>
      <Text>Use the provider wrapper:</Text>
      <UiCode
        code={{
          fileName: 'app.tsx',
          code: demoWrapper,
          language: 'tsx',
        }}
      />
      <Text>Or explicitly configure providers and components:</Text>
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
