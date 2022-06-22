import { Error } from './form-error.styled'

function FormError (props: any) {
  const { message, ...restProps } = props

  return (
    <Error {...restProps}>
      {message}
    </Error>
  )
}

export default FormError