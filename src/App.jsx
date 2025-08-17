import { useState } from 'react'
import './styles/auth.css'

function Login() {
  return (
    <>
      <div id="title">
        <h3> 스터디윗미 </h3>
        <p className="large"> 로그인하기 </p>
      </div>
      <div id="form-wrapper">
        <form>
          <div className="input-box">
            <label for="email" className="caption label"> 이메일 </label>
            <input id="email" className="input" type="text" required></input>
          </div>
          <div className="input-box">
            <label for="password" className="caption label"> 비밀번호 </label>
            <input id="password" className="input" type="password" required></input>
          </div>
          <button type="sumbit" id="form-btn" className="large"> 로그인 </button>
        </form>
        <div id="form-footer">
          <a href=""> 이메일 · 비밀번호 찾기 </a>
          <p> 계정이 없으신가요? <a href=""> 회원가입하기 </a> </p>
        </div>
      </div>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
    </>
  )
}

export default App
