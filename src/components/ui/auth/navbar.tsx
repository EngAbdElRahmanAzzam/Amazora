import { Link } from "react-router-dom"

const AuthNavbar = () => {
  return (
    <header className='pt-2 pb-3'>
        <Link to="/">
          <img className='w-40 m-auto' src='/amazora-logo.png' alt="amazora-logo"/>
        </Link>
    </header>
  )
}

export default AuthNavbar