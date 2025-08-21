import { useState } from 'react'
import { RightarrowIcon } from '../assets/icons'
import Sidebar from '../components/Sidebar.jsx'
import Header from '../components/header.jsx'
import '../styles/main.css'

function Title({ title }) {
  return (
    <>
      <div className="title">
        <p> {title} </p>
        <RightarrowIcon size={16} />
      </div>
    </>
  )
}

function Goal({ goal, percent }) {
  return (
    <>
      <div id="goal">
        <Title title={"목표"} />
        <div id="goal-body">
          <p className="small"> {goal} </p>
          <div id="percent">
            <h4> {percent}% </h4>
            <div id="percent-bar"></div>
          </div>
        </div>
      </div>
    </>
  )
}

function Assignment() {
  function AssignmentMore({ category, title, date }) {
    return (
      <>
        <div className="assignment-more">
          <p className="small"> {category} </p>
          <p className="large"> {title} </p>
          <p className="caption"> {date}일 마감 </p>
        </div>
      </>
    )
  }

  return (
    <>
      <div id="assignment">
        <Title title={"과제"} />
        <div id="assignment-body">
          <div id="status">
            <div className="status">
              <p className="small"> 미제출 </p>
              <h4 > 2개 </h4>
            </div>
            <div className="status">
              <p className="small"> 제출 </p>
              <h4 > 4개 </h4>
            </div>
            <div className="status">
              <p className="small"> 전체 </p>
              <h4 > 300개 </h4>
            </div>
          </div>
          <div id="assignment-more">
            <AssignmentMore category={"정리"} title={"React 배운거 정리하기"} date={20} />
            <AssignmentMore category={"제작"} title={"웹사이트 암거나 만들어오기"} date={31} />
            <AssignmentMore category={"제작"} title={"피그마 디자인 완성하기"} date={11} />
          </div>
        </div>
      </div>
    </>
  )
}

function Calender() {
  return (
    <>
      <div id="calender">
        <Title title={"일정"} />
      </div>
    </>
  )
}

function Index() {
  const goal = "프론트 마스터되기";
  const percent = 30;
  const assignmentCount = [2, 4, 300];

  return (
    <>
      <Sidebar />
      <main>
        <Header channelName={"대시보드"} userName={"진수화"} />
        <div id="field">
          <div id="field1">
            <Goal goal={goal} percent={percent}/>
            <Assignment />
          </div>
          <div id="field2">
            <Calender />
          </div>
        </div>
      </main>
    </>
  )
}

export default Index