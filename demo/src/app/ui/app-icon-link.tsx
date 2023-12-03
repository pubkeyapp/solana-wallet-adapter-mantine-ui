import { ActionIcon, ActionIconProps } from '@mantine/core'
import { ComponentType } from 'react'

export interface AppIconLinkProps extends ActionIconProps {
  href: string
  icon: ComponentType<{ size: number }>
}

export function AppIconLink({ href, icon: Icon, ...props }: AppIconLinkProps) {
  return (
    <ActionIcon component="a" href={href} target="_blank" rel="noopener noreferrer" {...props}>
      <Icon size={24} />
    </ActionIcon>
  )
}
