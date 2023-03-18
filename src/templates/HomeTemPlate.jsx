import React from 'react'
import {Outlet} from 'react-router-dom'
import FooterHome from '../Components/FooterHome'
import HeaderHome from '../Components/HeaderHome'
export default function HomeTemPlate() {
  return (
    <div>
        <HeaderHome/>
        <Outlet/>
        <FooterHome/>
    </div>
  )
}
