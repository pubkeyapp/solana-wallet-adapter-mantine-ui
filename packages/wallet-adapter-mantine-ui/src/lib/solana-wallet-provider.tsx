import React, { ReactNode } from 'react'
import { ConnectionConfig } from '@solana/web3.js'
import type { Adapter, WalletError } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from './wallet-modal-provider'

export interface SolanaWalletProviderProps {
  autoConnect?: boolean
  children: ReactNode
  config?: ConnectionConfig
  endpoint: string
  localStorageKey?: string
  onError?: (error: WalletError, adapter?: Adapter) => void
  wallets?: Adapter[]
}

export function SolanaWalletProvider({
  autoConnect = false,
  endpoint,
  children,
  config,
  localStorageKey,
  onError,
  wallets = [],
}: SolanaWalletProviderProps) {
  return (
    <ConnectionProvider endpoint={endpoint} config={config}>
      <WalletProvider autoConnect={autoConnect} localStorageKey={localStorageKey} onError={onError} wallets={wallets}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
