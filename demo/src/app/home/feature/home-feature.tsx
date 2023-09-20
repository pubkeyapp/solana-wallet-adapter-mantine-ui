import { Container, Stack } from '@mantine/core'
import { HomeUiExample } from '../ui'
import { HomeUiHero } from '../ui/hero/home-ui-hero'

export function HomeFeature() {
  return (
    <Container size="xl">
      <Stack gap="xl">
        <HomeUiHero />
        <HomeUiExample />
      </Stack>
    </Container>
  )
}
