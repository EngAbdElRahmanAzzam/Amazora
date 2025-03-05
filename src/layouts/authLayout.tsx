import { Outlet } from "react-router-dom"
import AuthNavbar from "../components/ui/auth/navbar"
import AuthFooter from "../components/ui/auth/footer"
import Layout from "../components/common/layout"


const AuthLayout = () => {
  return (
    <Layout>
        <AuthNavbar />
        <Outlet />
        <AuthFooter />
    </Layout>
  )
}

export default AuthLayout