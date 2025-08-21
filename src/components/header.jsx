import { useState } from 'react'
import { DownarrowIcon, RightarrowIcon, SettingIcon, NotificationIcon, ThemeIcon, LogoutIcon } from '../assets/icons'
import '../styles/header.css'

function ExpandInfo({ userName, userEmail }) {
  return (
    <>
      <div id="expand-info">
        <div id="expand-user">
          <div id="expand-user-profile"></div>
          <div id="expand-user-info">
            <p> {userName} </p>
            <p className="caption"> {userEmail} </p>
          </div>
        </div>
        <div id="expand-panel">
          <div className="expand-panel-menu">
            <div className="expand-panel-txt">
              <ThemeIcon size={16} />
              <p className="small"> 테마 </p>
            </div>
            <RightarrowIcon size={16} />
          </div>
          <div className="expand-panel-menu">
            <div className="expand-panel-txt">
              <LogoutIcon size={16} />
              <p className="small"> 로그아웃 </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Header({ channelName, userName }) {
  const [info, setInfo] = useState('close')

  return (
    <>
      {info === "expand" && <ExpandInfo userName={"진수화"} userEmail={"1234@email.com"} />}

      <div id="header">
        <p> {channelName} </p>
        <nav>
          <div id="icons">
            <SettingIcon size={20} />
            <NotificationIcon size={20} />
          </div>
          <div id="user" onClick={() => setInfo(prev => (prev === 'expand' ? 'close' : 'expand'))}>
            <div id="user-img"></div>
            <div id="user-name">
              <p className="small"> {userName} </p>
              <DownarrowIcon size={12} />
            </div>
          </div>
        </nav>
      </div>
      <hr />
    </>
  )
}

export default Header