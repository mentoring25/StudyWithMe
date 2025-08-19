import { useState } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Header from '../components/header.jsx'
import '../styles/main.css'

function Index() {
  return (
    <>
      <Sidebar />
      <main>
        <Header channelName={"대시보드"} userName={"진수화"} />
      </main>
    </>
  )
}

export default Index