import { Outlet } from "react-router-dom"
import RootNavbar from "../components/ui/mainLayout/navbar"
import Layout from "../components/common/layout"


const RootLayout = () => {
  return (
    <Layout>
        <RootNavbar />
        <Outlet />
        <footer>
          footer
        </footer>
    </Layout>
  )
}

export default RootLayout