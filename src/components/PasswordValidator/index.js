// Write your code here
import {useState} from 'react'
import {Container, Heading, Para, Input} from './styledComponents'

const PasswordValidator = () => {
  const [input, setInput] = useState('')
  const showError = input.length < 8
  const errorPara = (
    <Para error>Your password must be at least 8 characters</Para>
  )
  const onChangeInput = event => {
    setInput(event.target.value)
  }

  return (
    <Container>
      <Container card>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input value={input} onChange={onChangeInput} type="password" />
        {showError && errorPara}
      </Container>
    </Container>
  )
}

export default PasswordValidator
