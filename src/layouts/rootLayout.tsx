import { Outlet } from "react-router-dom"
import RootNavbar from "../components/common/navbar"

const RootLayout = () => {
  return (
    <div>
        <RootNavbar />
        <Outlet />
    </div>
  )
}

export default RootLayout