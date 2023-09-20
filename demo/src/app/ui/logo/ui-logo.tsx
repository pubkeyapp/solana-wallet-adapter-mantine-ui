import { Image } from '@mantine/core'
import { useUiColorScheme } from '../theme/ui-color-scheme-provider'

export function UiLogo({ height = 28 }: { height?: number }) {
  const { colorScheme: theme } = useUiColorScheme()

  return <Image src={theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'} height={height} alt="PubKey Logo" />
}
