import { Outlet } from "react-router-dom"
import AuthNavbar from "../components/ui/rootlayout/navbar"
import AuthFooter from "../components/ui/rootlayout/footer"


const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
        <AuthNavbar />
        <Outlet />
        <AuthFooter />
    </div>
  )
}

export default AuthLayout