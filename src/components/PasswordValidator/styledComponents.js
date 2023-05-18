// Style your elements here

// import styled, {createGlobalStyle} from 'styled-components'
import styled, {createGlobalStyle} from 'styled-components'

// container,Heading,Para,Input

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5f5f5;
    font-family: Arial, sans-serif;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.card ? '#264d73' : '#000033')};
`
export const Heading = styled.h1`
  color: white;
  font-family: 'Roboto';
`

export const Para = styled.p`
  color: ${props => (props.error ? 'red' : 'white')};
`

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 20px;
  border-radius: 5px;
`
