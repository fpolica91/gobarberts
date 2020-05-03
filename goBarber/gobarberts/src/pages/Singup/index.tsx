import React, { useCallback } from 'react'
import { Form } from '@unform/web'
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
import logo from '../../assets/logo.svg'
import { Container, Content, Background } from './styles'
import Button from '../../components/Button'
import Input from '../../components/Input'
import * as Yup from 'yup'

const Singup: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('name is required'),
        email: Yup.string()
          .email()
          .required('email is required')
          .email('enter a valid email'),
        password: Yup.string().min(6),
      })
      await schema.validate(data, {
        abortEarly: true,
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="goBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Sign </h1>
          <Input icon={FiUser} name="name" placeholder="email" type="name" />
          <Input icon={FiMail} name="email" placeholder="email" type="email" />
          <Input
            icon={FiLock}
            name="password"
            placeholder="password"
            type="password"
          />
          <Button type="submit">Register</Button>
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
