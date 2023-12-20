import { Container, ContainerProps } from '@mantine/core'

export function AppContainer(props: ContainerProps) {
  return (
    <Container size="xl" miw={{ base: 0, md: 700 }} {...props}>
      {props.children}
    </Container>
  )
}
