import React from 'react'
import Header from '../components/Header'
import Foooter from '../components/Foooter'
import { Outlet } from 'react-router-dom'

export default function SharedLayout() {
  return (
    <>

        <Header />
        <Outlet  />
        <Foooter />
    </>
  )
}
