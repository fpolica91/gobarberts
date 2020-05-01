import React from 'react'
import { Form } from '@unform/web'
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
import logo from '../../assets/logo.svg'
import { Container, Content, Background } from './styles'
import Button from '../../components/Button'
import Input from '../../components/Input'

const Singup: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data)
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="goBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Sign </h1>
          <Input icon={FiUser} name="name" placeholder="email" type="email" />
          <Input icon={FiMail} name="email" placeholder="email" type="email" />
          <Input
            icon={FiLock}
            name="password"
            placeholder="password"
            type="password"
          />
          <Button>Register</Button>
        </Form>
        <a href="forgot">
          <FiArrowLeft />
          Login
        </a>
      </Content>
    </Container>
  )
}

export default Singup
