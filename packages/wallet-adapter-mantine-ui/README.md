# Solana Wallet Adapter for Mantine

This is a [Mantine](https://mantine.dev/) wrapper for the [Solana Wallet Adapter](https://github.com/solana-labs/wallet-adapter).

## Installation

```shell
yarn add @pubkeyapp/wallet-adapter-mantine-ui @solana/wallet-adapter-react @solana/web3.js
# or...
npm install @pubkeyapp/wallet-adapter-mantine-ui @solana/wallet-adapter-react @solana/web3.js
# or...
pnpm add @pubkeyapp/wallet-adapter-mantine-ui @solana/wallet-adapter-react @solana/web3.js
# or whatever package manager you use, you get the idea...
```

## Compatibility

This package is compatible with the following versions of Mantine:

- [v1.x.x](https://www.npmjs.com/package/@pubkeyapp/wallet-adapter-mantine-ui/v/1.3.3) is compatible with [Mantine v6](https://v6.mantine.dev/)
- [v2.x.x](https://www.npmjs.com/package/@pubkeyapp/wallet-adapter-mantine-ui) is compatible with [Mantine v7](https://mantine.dev/)

## Usage

You need to wrap your app in the `ConnectionProvider`, `WalletProvider`, and `WalletModalProvider` components from `@solana/wallet-adapter-react` and `@pubkeyapp/wallet-adapter-mantine-ui` respectively.

```tsx
import { WalletModalProvider, WalletMultiButton } from '@pubkeyapp/wallet-adapter-mantine-ui'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { clusterApiUrl } from '@solana/web3.js'

export function App() {
  return (
    <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
      <WalletProvider>
        <WalletModalProvider>{/* Your app here */}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
```

Once you've done that, you can use the `WalletMultiButton` component to render a button that will open a modal to connect to a wallet.

```tsx
import { WalletMultiButton } from '@pubkeyapp/wallet-adapter-mantine-ui'

export function YourFeature() {
  return <WalletMultiButton />
}
```

## License

This project is licensed under the [MIT license](LICENSE).
