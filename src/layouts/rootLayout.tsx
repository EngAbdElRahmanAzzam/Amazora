import { Outlet } from "react-router-dom"
import RootNavbar from "../components/ui/mainLayout/navbar"


const RootLayout = () => {
  return (
    <div>
        <RootNavbar />
        <Outlet />
    </div>
  )
}

export default RootLayout