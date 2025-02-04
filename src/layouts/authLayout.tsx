import { Outlet } from "react-router-dom"
import AuthNavbar from "../components/authLayout/navbar"
import AuthFooter from "../components/authLayout/footer"

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