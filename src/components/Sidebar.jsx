import { useState } from 'react'
import { DashboardIcon, AddIcon, DownarrowIcon, BookIcon, HashIcon, VoiceIcon } from '../assets/icons'
import '../styles/sidebar.css'

function Category({ categoryName }) {
  return (
    <>
      <div className="category">
        <p> {categoryName} </p>
        <AddIcon />
      </div>
    </>
  )
}

function Channel({ channelName, Icons }) {
  return (
    <>
      <div className="channel">
        {Icons && <Icons />}
        <p> {channelName} </p>
      </div>
    </>
  )
}

function Study({ studyName }) {
  return (
    <>
      <div className="switcher-channel">
        <div className="switcher-channel-icon"></div>
        <p className="large"> {studyName} </p>
      </div>
    </>
  )
}

function Expandswitcher() {
  return (
    <>
      <div id="expand-switcher">
        <div className="switcher-category">
          <p className="caption"> 내 스터디 </p>
          <Study studyName={"한자마스터"} />
          <Study studyName={"게임 개발"} />
        </div>
        <div className="switcher-category">
          <p className="caption"> 새로 시작하기 </p>
          <div className="switcher-made">
            <AddIcon />
            <p> 스터디 만들기 </p>
          </div>
        </div>
      </div>
    </>
  )
}

function Sidebar() {
  const [switcher, setSwitcher] = useState('close');

  return (
    <>
      {switcher === "expand" && <Expandswitcher />}
      
      <div id="sidebar-container">
        <div id="sidebar">
          <div id="main">
            <div id="switcher" onClick={() => setSwitcher(prev => (prev === 'expand' ? 'close' : 'expand'))}>
              <div id="switcher-img"></div>
              <div id="switcher-txt">
                <h1 id="switcher-title"> 판교마스터 </h1>
                <DownarrowIcon />
              </div>
            </div>
            <div className="channel-container">
              <Channel channelName={"대시보드"} Icons={DashboardIcon} />
              <Channel channelName={"과제 제출"} Icons={BookIcon} />
            </div>
          </div>
          <hr />
          <div className="channel-container">
            <Category categoryName={"채팅"} />
            <Channel channelName={"공지사항"} Icons={HashIcon}/>
            <Channel channelName={"로비"} Icons={HashIcon}/>
            <Channel channelName={"수다"} Icons={HashIcon}/>
            <Channel channelName={"질문"} Icons={HashIcon}/>
            <Channel channelName={"자료공유"} Icons={HashIcon}/>
          </div>
          <hr />
          <div className="channel-container">
            <Category categoryName={"음성 채팅"} />
            <Channel channelName={"라운지"} Icons={VoiceIcon}/>
            <Channel channelName={"공부방"} Icons={VoiceIcon}/>
          </div>
        </div>
        <hr className="height" />
      </div>
    </>
  )
}

export default Sidebar