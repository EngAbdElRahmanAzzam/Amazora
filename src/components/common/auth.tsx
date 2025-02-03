import {ReactNode} from 'react'
import { Navigate } from 'react-router-dom';

interface IProps{
    redirect:string;
    isAllowed:boolean;
    Page:ReactNode;
}

const ProtectedRoute = ({isAllowed, Page, redirect}:IProps) => {
    if(isAllowed)
        return Page
    return <Navigate to={redirect}/>
}

export default ProtectedRoute