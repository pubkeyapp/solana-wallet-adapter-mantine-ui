import { Code, Group, Stack } from '@mantine/core'
import { ReactNode } from 'react'

export function AppDemo({ children, title }: { children: ReactNode; title: string }) {
  return (
    <Stack p="md" style={{ textAlign: 'center' }} gap="md" align="center">
      <Group align="center">
        <Code style={{ fontSize: 16 }}>{title}</Code>
      </Group>
      {children}
    </Stack>
  )
}
