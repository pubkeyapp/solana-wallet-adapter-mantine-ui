import { ActionIcon, ActionIconProps } from '@mantine/core'
import { ComponentType } from 'react'

export interface UiIconLinkProps extends ActionIconProps {
  href: string
  icon: ComponentType<{ size: number }>
}

export function UiIconLink({ href, icon: Icon, ...props }: UiIconLinkProps) {
  return (
    <ActionIcon component="a" href={href} target="_blank" rel="noopener noreferrer" {...props}>
      <Icon size={24} />
    </ActionIcon>
  )
}
