import { Switch, SwitchProps } from '@mantine/core'

export function AppAutoConnect({
  autoConnect = false,
  setAutoConnect,
  ...props
}: {
  autoConnect?: boolean
  setAutoConnect: (autoConnect: boolean) => void
} & SwitchProps) {
  return (
    <Switch
      checked={autoConnect}
      onChange={() => setAutoConnect(!autoConnect)}
      label="Enable WalletProvider auto-connect"
      {...props}
    />
  )
}
