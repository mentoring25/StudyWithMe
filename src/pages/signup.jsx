import { useState } from 'react'
import '../styles/auth.css'

function Signup({ switchMode }) {
  return (
    <>
      <div id="title">
        <h3> 스터디윗미 </h3>
        <p className="large"> 회원가입하기 </p>
      </div>
      <div id="form-wrapper">
        <form>
          <div className="input-box">
            <label htmlFor="email" className="caption label"> 이메일 </label>
            <input id="email" className="input" type="text" required />
          </div>
          <div className="input-box">
            <label htmlFor="password" className="caption label"> 비밀번호 </label>
            <input id="password" className="input" type="password" required />
          </div>
          <button type="submit" id="form-btn" className="large"> 회원가입 </button>
        </form>
        <div id="form-footer">
          <p> 이미 게정이 있으신가요? <a href="#" onClick={switchMode}> 로그인하기 </a> </p>
        </div>
      </div>
    </>
  )
}

export default Signup