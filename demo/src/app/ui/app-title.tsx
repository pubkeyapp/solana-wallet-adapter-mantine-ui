import { Box, rem, Text, Title } from '@mantine/core'

export function AppTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Box>
      <Title style={{ textAlign: 'center', fontWeight: 800, fontSize: rem(40) }}>{title}</Title>
      <Text style={{ textAlign: 'center' }}>{subtitle}</Text>
    </Box>
  )
}
