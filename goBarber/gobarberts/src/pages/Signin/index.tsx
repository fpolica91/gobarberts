import React from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import logo from '../../assets/logo.svg'
import { Container, Content, Background } from './styles'
import Button from '../../components/Button'
import Input from '../../components/Input'

const Sigin: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="goBarber" />
      <form>
        <h1>Login</h1>
        <Input icon={FiMail} name="email" placeholder="email" type="email" />
        <Input
          icon={FiLock}
          name="password"
          placeholder="password"
          type="password"
        />
        <Button>Submit</Button>
        <a href="forgot">Forgot Password</a>
      </form>
      <a href="forgot">
        <FiLogIn />
        Create Account
      </a>
    </Content>
    <Background />
  </Container>
)

export default Sigin
