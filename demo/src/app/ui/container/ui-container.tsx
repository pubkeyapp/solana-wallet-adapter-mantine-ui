import { Container, ContainerProps } from '@mantine/core'

export function UiContainer({ children, ...props }: ContainerProps) {
  return (
    <Container size="responsive" {...props}>
      {children}
    </Container>
  )
}
