import { ActionIcon, ActionIconProps } from '@mantine/core'
import { useUiColorScheme } from '@pubkey-ui/core'
import { IconMoon, IconSun } from '@tabler/icons-react'

export function AppThemeToggle(props?: ActionIconProps) {
  const { colorScheme, toggleColorScheme } = useUiColorScheme()

  return (
    <ActionIcon onClick={() => toggleColorScheme()} aria-label="Toggle color scheme" {...props}>
      {colorScheme === 'dark' ? <IconSun size={24} /> : <IconMoon size={24} />}
    </ActionIcon>
  )
}
