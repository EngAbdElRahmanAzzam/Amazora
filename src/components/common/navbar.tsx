import CartIcon from "../../asserts/icons/cartIcon";
import SearchIcon from "../../asserts/icons/searchIcon";

export interface INavProps{
  title:string;
  text:string;
}
const NavItem = ({title, text}:INavProps) => {
  return(
    <div className="text-white flex flex-col justify-between">
      <p className="text-sm font-thin">{title}</p>
      <p className="text-lg font-light">{text}</p>
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
            <NavItem title="Hello Guest" text="Sign in"/>
            <NavItem title="Returns" text="& Orders"/>
            <NavItem title="Your" text="Prime"/>
        </nav>
        <CartIcon className="size-7"/>
    </header>
  )
}

export default RootNavbar