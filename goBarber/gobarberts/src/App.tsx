import React from 'react'
import GlobalStyle from './styles/global'
import Signin from './pages/Signin'
// import Singup from './pages/Singup/index'
import ToastContainer from './components/ToastContainer'
import AppProvider from './context/index'

const App: React.FC = () => (
  <>
    <AppProvider>
      <Signin />
    </AppProvider>
    <GlobalStyle />
  </>
)
export default App
