import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div>
        <div>authLayout</div>
        <Outlet />
    </div>
  )
}

export default AuthLayout