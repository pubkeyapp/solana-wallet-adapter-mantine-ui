import { useWallet, useAnchorWallet, useConnection } from '@solana/wallet-adapter-react'
import { TransactionMessage, VersionedTransaction, PublicKey, TransactionInstruction } from '@solana/web3.js'

import { encode } from 'bs58'
import { Buffer } from 'buffer/'

export function useCreateSignature() {
  const wallet = useAnchorWallet()
  const { connection } = useConnection()
  const { signTransaction, signMessage } = useWallet()

  async function signChallenge(challenge: string, useLedger: boolean) {
    if (!wallet) {
      throw new Error('Wallet unavailable')
    }

    if (useLedger) {
      if (!signTransaction) {
        throw new Error('Sign transaction not available')
      }

      const MEMO_PROGRAM_ID = new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr')

      const messageV0 = new TransactionMessage({
        instructions: [
          new TransactionInstruction({
            programId: MEMO_PROGRAM_ID,
            keys: [],
            // @ts-expect-error Buffer
            data: Buffer.from(challenge, 'utf8'),
          }),
        ],
        payerKey: wallet.publicKey,
        recentBlockhash: (await connection.getLatestBlockhash('confirmed')).blockhash,
      }).compileToV0Message()

      const tx = new VersionedTransaction(messageV0)

      const signedTx = await signTransaction(tx)
      return {
        messageBytes: signedTx.message.serialize(),
        signatureBytes: signedTx.signatures[0],
        signatureHex: encode(signedTx.signatures[0]),
        walletBytes: wallet.publicKey.toBytes(),
      }
    } else {
      if (!signMessage) {
        throw new Error('Sign message not available')
      }

      const messageBytes = new TextEncoder().encode(challenge)
      const signature = await signMessage(messageBytes)

      return {
        messageBytes,
        signatureHex: encode(signature),
        signatureBytes: signature,
        walletBytes: wallet.publicKey.toBytes(),
      }
    }
  }

  return signChallenge
}
