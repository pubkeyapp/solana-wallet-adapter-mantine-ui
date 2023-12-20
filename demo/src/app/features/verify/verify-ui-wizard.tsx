import { Badge, Button, Group, rem, Stack, Stepper, Switch } from '@mantine/core'
import { toastError, toastSuccess, UiGroup, UiStack } from '@pubkey-ui/core'
import { verifySignature } from '@pubkeyapp/solana-verify-wallet'
import { WalletDisconnectButton, WalletMultiButton } from '@pubkeyapp/wallet-adapter-mantine-ui'
import { useWallet } from '@solana/wallet-adapter-react'
import { IconUsb, IconWallet } from '@tabler/icons-react'
import { useCallback, useMemo, useState } from 'react'
import { useCreateSignature } from './use-create-signature'

export function VerifyUiWizard() {
  const { connected, publicKey, signMessage, wallet } = useWallet()
  const [signed, setSigned] = useState(false)
  const [useLedger, setUseLedger] = useState<boolean>(false)
  const [showDescription, setShowDescription] = useState(true)
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal')
  const challenge = 'Sign this message to verify your wallet'
  const createSignature = useCreateSignature()

  const active = useMemo(() => {
    if (!wallet) {
      setSigned(false)
      return 0
    }
    if (!connected || !publicKey) {
      setSigned(false)
      return 1
    }
    if (!signed) {
      return 2
    }
    return 3
  }, [wallet, connected, publicKey, signed])

  const sign = useCallback(async () => {
    if (!challenge || signMessage === undefined || !publicKey) {
      return
    }
    const signature = await createSignature({
      challenge,
      publicKey: publicKey.toString(),
      useLedger,
    }).catch((err) => toastError({ message: `${err}`, title: 'Error signing message' }))

    if (!signature) {
      throw new Error('No signature')
    }

    const verified = verifySignature({
      challenge,
      publicKey: publicKey.toString(),
      signature,
      useLedger,
    })

    if (!verified) {
      toastError({
        message: 'Failed to verify signature',
        title: 'Error signing message',
      })
      return
    }

    toastSuccess({
      message: 'Successfully verified signature',
      title: 'Success signing message',
    })
    setSigned(!!signature)
    return signature
  }, [challenge, createSignature, publicKey, signMessage, useLedger])

  return (
    <Stack gap="lg">
      <Group justify="center" mb="lg">
        <Switch
          checked={showDescription}
          onChange={() => setShowDescription((showDescription) => !showDescription)}
          label="Show descriptions"
        />
        <Switch
          checked={orientation === 'horizontal'}
          onChange={() => setOrientation((orientation) => (orientation === 'horizontal' ? 'vertical' : 'horizontal'))}
          label="Horizontal orientation"
        />
      </Group>
      <Stepper active={active} allowNextStepsSelect={false} orientation={orientation}>
        <Stepper.Step label="Select wallet" description={showDescription ? 'Select your wallet' : undefined}>
          <UiGroup mt="md" justify="end">
            <WalletMultiButton />
          </UiGroup>
        </Stepper.Step>
        <Stepper.Step label="Connect wallet" description={showDescription ? 'Connect your wallet' : undefined}>
          <UiGroup mt="md">
            <WalletDisconnectButton variant="light" />
            <WalletMultiButton />
          </UiGroup>
        </Stepper.Step>
        <Stepper.Step label="Sign message" description={showDescription ? 'Sign a message' : undefined}>
          <UiGroup mt="md" align="start">
            <WalletDisconnectButton variant="light" />
            <UiStack align="end">
              <Button leftSection={useLedger ? <IconUsb /> : <IconWallet />} onClick={() => sign()}>
                Verify {ellipsify(publicKey?.toString())}
              </Button>
              <Switch
                checked={useLedger}
                onChange={() => setUseLedger((useLedger) => !useLedger)}
                label="Use Ledger"
                onLabel={<IconUsb style={{ width: rem(16), height: rem(16) }} stroke={2.5} />}
                offLabel={<IconWallet style={{ width: rem(16), height: rem(16) }} stroke={2.5} />}
              />
            </UiStack>
          </UiGroup>
        </Stepper.Step>
        <Stepper.Completed>
          <UiGroup mt="md" align="start">
            <WalletDisconnectButton />
            <Badge size="xl" variant="light" color="green">
              {useLedger ? 'Ledger' : 'Wallet'} verified
            </Badge>
          </UiGroup>
        </Stepper.Completed>
      </Stepper>
    </Stack>
  )
}

export function ellipsify(str = '', len = 4) {
  if (str.length > 30) {
    return str.substring(0, len) + '..' + str.substring(str.length - len, str.length)
  }
  return str
}
