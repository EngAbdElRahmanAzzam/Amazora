import { RouterProvider } from "react-router-dom"
import router from "./routes/router.config"
import { AuthProvider } from "./context/auth/authContext"
import {Toaster} from "sonner"



function App() {

  return (
    <div>
      <Toaster />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  )
}

export default App
