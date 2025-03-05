import { Link } from "react-router-dom"
import ErrorHandler from "../../components/common/errorHandlers"


const NotFoundPage = () => {
    return (
      <ErrorHandler 
      statusCode={404} 
      errorMsg="Page Not Found"
      >
        
          <Link to="/" className="text-white bg-black px-3 py-1 rounded-full">
            Home
          </Link>
      </ErrorHandler>
    )
}

export default NotFoundPage