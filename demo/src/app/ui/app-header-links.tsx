import { ActionIconProps, Group } from '@mantine/core'
import { AppIconLink, AppIconLinkProps } from './app-icon-link'
import { AppThemeToggle } from './app-theme-toggle'

export function AppHeaderLinks({ icons }: { icons: AppIconLinkProps[] }) {
  const iconProps: ActionIconProps = { variant: 'light', size: 'xl' }
  return (
    <Group gap={5}>
      {icons.map((icon) => (
        <AppIconLink key={icon.href} {...icon} {...iconProps} />
      ))}
      <AppThemeToggle {...iconProps} />
    </Group>
  )
}
