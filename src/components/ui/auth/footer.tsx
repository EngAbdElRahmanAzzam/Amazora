import { Link } from "react-router-dom"

const AuthFooter = () => {
    return (
        <footer className="mt-auto">
            <div className="border-b-2 border-gray-100"></div>

            <div className="w-fit pt-4 flex gap-1 mx-auto">
                <div className="p-1">
                    <Link to='/' className="inline-block text-sm text-gray-500 hover:text-gray-600 font-medium">Home</Link>
                </div>

                <div className="p-1">
                    <Link to='/privacy' className="inline-block text-sm text-gray-500 hover:text-gray-600 font-medium"> Privacy Notice </Link>
                </div>
            </div>

            <div className="container px-4 mx-auto text-center">
                <p className="pt-2 text-md text-gray-400 font-medium">
                    © 2025 amazora.com.
                    All rights reserved.
                </p>
                <p className="text-sm md:pb-20 text-gray-600 font-light">
                    Developed by AbdElRahman Ahmed Azzam
                </p>
            </div>

      </footer>
    )
  }
  
  export default AuthFooter