import { Link } from "react-router-dom";
import CartIcon from "../../asserts/icons/cartIcon";
import SearchIcon from "../../asserts/icons/searchIcon";

export interface INavProps{
  lineOne:string;
  lineTwo:string;
}
const NavItem = ({lineOne, lineTwo}:INavProps) => {
  return(
    <div className="text-white text-sm  flex flex-col justify-between">
      <p className="font-bold">{lineOne}</p>
      <p className="font-light">{lineTwo}</p>
    </div>
  )
}

const RootNavbar = () => {

  return (
    <header className="px-4 py-3 bg-gray-600 flex gap-3 justify-between items-center">
        <img className="w-28" src="/amazora-logo.png" alt="amazora-logo" />

        <div className="flex-grow relative">
          <input className="py-2 w-full"/>
          <label className="bg-orange-300  p-2 absolute -right-0">
              <SearchIcon />
          </label>
        </div>
        <nav className="flex gap-2">
            <Link to="/auth/sign-in">
              <NavItem lineOne="Hello Guest" lineTwo="Sign in"/>
            </Link>
            <NavItem lineOne="Returns" lineTwo="& Orders"/>
            <NavItem lineOne="Your" lineTwo="Prime"/>
        </nav>
        <CartIcon className="size-7"/>
    </header>
  )
}

export default RootNavbar