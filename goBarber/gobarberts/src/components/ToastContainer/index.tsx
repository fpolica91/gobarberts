import React from 'react'
import { FiAlertCircle, FiXCircle } from 'react-icons/fi'
import { Container } from './styles'
import { ToastMessage, useToast } from '../../context/toast'
import Toast from './Toast'

export interface ToastContainerProps {
  messages: ToastMessage[]
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
        // <Toast
        //   key={message.id}
        //   type={message.type}
        //   hasDecription={!!message.description}
        // >
        //   <FiAlertCircle size={20} />
        //   <div>
        //     <strong>{message.title}</strong>
        //     <p>{message.description && message.description}</p>
        //   </div>
        //   <button type="button" onClick={() => removeToast(message.id)}>
        //     <FiXCircle size={18} />
        //   </button>
        // </Toast>
      ))}
    </Container>
  )
}

export default ToastContainer
