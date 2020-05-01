import React from 'react'
import GlobalStyle from './styles/global'
import Signin from './pages/Signin'
import Singup from './pages/Singup/index'

const App: React.FC = () => (
  <>
    <Singup />
    <GlobalStyle />
  </>
)
export default App
