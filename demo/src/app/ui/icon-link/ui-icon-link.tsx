import { ActionIcon } from '@mantine/core'
import { ComponentType } from 'react'

export interface UiIconLinkProps {
  href: string
  icon: ComponentType<{ size: number }>
}

export function UiIconLink({ href, icon: Icon }: UiIconLinkProps) {
  return (
    <ActionIcon variant="default" size="xl" component="a" href={href}>
      <Icon size={24} />
    </ActionIcon>
  )
}
