import React from "react"
import { CssBaseline } from "@mui/material"
import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"



const Layout = () => {
  return (
    <>
    <CssBaseline/>
    <Navigation/>
    <Outlet/>
    </>
  )
}

export default Layout