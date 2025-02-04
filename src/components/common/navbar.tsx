import CartIcon from "../../asserts/icons/cartIcon";

export interface INavProps{
  title:string;
  text:string;
}
const NavItem = ({title, text}:INavProps) => {
  return(
    <div>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  )
}

const RootNavbar = () => {

  return (
    <header className="px-4 py-3 bg-gray-600 flex justify-between items-center">
        <img className="w-36" src="/amazora-logo.png" alt="amazora-logo" />

        <div className="flex-grow">
          <input className="w-full"/>
          <label>
              
          </label>
        </div>
        <nav>
            <NavItem/>
            <NavItem/>
            <NavItem/>
        </nav>
        <CartIcon />
    </header>
  )
}

export default RootNavbar