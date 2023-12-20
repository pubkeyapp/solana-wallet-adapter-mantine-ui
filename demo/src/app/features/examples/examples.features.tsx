import { WalletModalProvider } from '@pubkeyapp/wallet-adapter-mantine-ui'
import { GlowWalletAdapter } from '@solana/wallet-adapter-glow'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare'
import { clusterApiUrl } from '@solana/web3.js'
import { useState } from 'react'
import { AppContainer, AppNavButtons } from '../../ui'
import { ExamplesUiComponents } from './examples-ui-components'

export default function ExamplesFeatures() {
  const [autoConnect, setAutoConnect] = useState(true)
  return (
    <AppContainer>
      <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
        <WalletProvider
          autoConnect={autoConnect}
          wallets={[new GlowWalletAdapter(), new PhantomWalletAdapter(), new SolflareWalletAdapter()]}
        >
          <WalletModalProvider>
            <ExamplesUiComponents autoConnect={autoConnect} setAutoConnect={setAutoConnect} />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
      <AppNavButtons
        left={{ label: 'Getting Started', to: '/getting-started' }}
        right={{ label: 'Versions', to: '/versions' }}
      />
    </AppContainer>
  )
}
