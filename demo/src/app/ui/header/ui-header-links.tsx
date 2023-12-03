import { ActionIconProps, Group } from '@mantine/core'
import { UiIconLink, UiIconLinkProps } from '../icon-link/ui-icon-link'
import { UiThemeToggle } from '../theme-toggle/ui-theme-toggle'

export function UiHeaderLinks({ icons }: { icons: UiIconLinkProps[] }) {
  const iconProps: ActionIconProps = { variant: 'light', size: 'xl' }
  return (
    <Group gap={5}>
      {icons.map((icon) => (
        <UiIconLink key={icon.href} {...icon} {...iconProps} />
      ))}
      <UiThemeToggle {...iconProps} />
    </Group>
  )
}
