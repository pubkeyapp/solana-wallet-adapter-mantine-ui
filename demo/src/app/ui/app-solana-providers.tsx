import { WalletModalProvider } from '@pubkeyapp/wallet-adapter-mantine-ui'
import type { Adapter } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { clusterApiUrl } from '@solana/web3.js'
import { ReactNode } from 'react'

export function AppSolanaProviders({
  autoConnect = false,
  children,
  wallets = [],
}: {
  autoConnect?: boolean
  children: ReactNode
  wallets?: Adapter[]
}) {
  return (
    <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
      <WalletProvider autoConnect={autoConnect} wallets={wallets}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
