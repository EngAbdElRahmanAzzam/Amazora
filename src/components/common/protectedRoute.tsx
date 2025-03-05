import {ReactNode} from 'react'
import { Navigate } from 'react-router-dom';

interface IProps{
    redirect:string;
    isAllowed:boolean;
    page:ReactNode;
}

const ProtectedRoute = ({isAllowed, page, redirect}:IProps) => {
    if(isAllowed)
        return page
    return <Navigate to={redirect}/>
}

export default ProtectedRoute