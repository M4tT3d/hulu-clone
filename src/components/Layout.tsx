import { ReactNode } from "react"
import Header from "./header/Header"
import Navbar from "./Navbar"

interface layoutProps {
  children: ReactNode
}

function Layout({ children }: layoutProps): JSX.Element {
  return (
    <>
      <Header />
      <Navbar />
      {children}
    </>
  )
}
export default Layout
