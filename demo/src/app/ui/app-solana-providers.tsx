import { WalletModalProvider } from '@pubkeyapp/wallet-adapter-mantine-ui'
import { GlowWalletAdapter } from '@solana/wallet-adapter-glow'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare'
import { clusterApiUrl } from '@solana/web3.js'
import { ReactNode } from 'react'

export function AppSolanaProviders({ autoConnect = false, children }: { autoConnect?: boolean; children: ReactNode }) {
  return (
    <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
      <WalletProvider
        autoConnect={autoConnect}
        wallets={[new GlowWalletAdapter(), new PhantomWalletAdapter(), new SolflareWalletAdapter()]}
      >
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
