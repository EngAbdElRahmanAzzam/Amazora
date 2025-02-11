import { RouterProvider } from "react-router-dom"
import router from "./routes/router.config"
import { AuthProvider } from "./context/auth/authContext"



function App() {

  return (
    <>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </>
  )
}

export default App
