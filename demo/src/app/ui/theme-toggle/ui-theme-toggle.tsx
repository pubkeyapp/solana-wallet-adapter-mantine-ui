import { ActionIcon, ActionIconProps } from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'
import cx from 'clsx'
import { useUiColorScheme } from '../theme/ui-color-scheme-provider'
import classes from './ui-theme-toggle.module.css'

export function UiThemeToggle(props?: ActionIconProps) {
  const { toggleColorScheme } = useUiColorScheme()

  return (
    <ActionIcon onClick={toggleColorScheme} aria-label="Toggle color scheme" {...props}>
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  )
}
