import { DownarrowIcon, SettingIcon, NotificationIcon } from '../assets/icons'
import '../styles/header.css'

function Header({ channelName, userName }) {
  return (
    <>
      <div id="header">
        <p> {channelName} </p>
        <nav>
          <div id="icons">
            <SettingIcon />
            <NotificationIcon />
          </div>
          <div id="user">
            <div id="user-img"></div>
            <div id="user-name">
              <p className="small"> {userName} </p>
              <DownarrowIcon />
            </div>
          </div>
        </nav>
      </div>
      <hr />
    </>
  )
}

export default Header