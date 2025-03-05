import { createContext , ReactNode, useReducer , useContext} from "react";
import { IContextAuth } from "./types";
import { appLogic } from "../reducers/auth";

interface IProps{
    children:ReactNode
}

const contextInit:IContextAuth = {
    user:"",
    basket:[],
    updateAuth: (action) => action
}

const UserContext = createContext<IContextAuth>(contextInit)

export const useAuthContext = ()=>{
    return useContext(UserContext)
}

export const usecrediontialContext = ()=>{
    const {user} = useContext(UserContext)
    console.log("context", user)
    return user
}

export const useupdateAuthContext = ()=>{
    const {updateAuth} = useContext(UserContext)
    return updateAuth
}

export const AuthProvider = ({children}:IProps) =>{
    const [auth , updateAuth] = useReducer( appLogic , contextInit)

    return (
    <UserContext.Provider value={{user:auth.user, basket:auth.basket,updateAuth:updateAuth}}>
        { children}
    </UserContext.Provider>
    )

}

export default UserContext;