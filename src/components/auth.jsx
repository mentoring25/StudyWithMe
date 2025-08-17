import { useState } from 'react'
import Login from '../pages/login.jsx'
import Signup from '../pages/signup.jsx'

function Auth() {
  const [mode, setMode] = useState('login');

  return (
    <>
      {mode === 'login' ? (
        <Login switchMode={() => setMode('signup')}/>
      ) : (
        <Signup switchMode={() => setMode('login')}/>
      )}
    </>
  )
}

export default Auth