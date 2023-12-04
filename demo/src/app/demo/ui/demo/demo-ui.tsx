import { UiContainer, UiStack } from '@pubkey-ui/core'
import { DemoUiComponents } from './demo-ui-components'
import { DemoUiInstallation } from './demo-ui-installation'
import { DemoUiVersion } from './demo-ui-version'

export function DemoUi(props: { autoConnect: boolean; setAutoConnect: (c: boolean) => void }) {
  return (
    <UiContainer fluid py={0}>
      <UiStack gap="xl">
        <DemoUiComponents {...props} />
        <DemoUiInstallation />
        <DemoUiVersion />
      </UiStack>
    </UiContainer>
  )
}
