import {ReactNode} from 'react'

interface IProps{
    children : ReactNode
}

const Layout = ({children}:IProps) => {
  return (
    <div className='className="min-h-screen flex flex-col justify-between'>
        {children}
    </div>
  )
}

export default Layout