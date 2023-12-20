import { Button } from '@mantine/core'
import { UiGroup } from '@pubkey-ui/core'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export function AppNavButtons({
  left,
  right,
}: {
  left?: { label: string; to: string }
  right?: { label: string; to: string }
} = {}) {
  return (
    <UiGroup pt="xl">
      {left ? (
        <Button component={Link} to={left.to} variant="light" leftSection={<IconArrowLeft size={16} />}>
          {left.label}
        </Button>
      ) : (
        <div />
      )}
      {right ? (
        <Button component={Link} to={right.to} variant="light" rightSection={<IconArrowRight size={16} />}>
          {right.label}
        </Button>
      ) : (
        <div />
      )}
    </UiGroup>
  )
}
