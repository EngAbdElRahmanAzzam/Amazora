import { createContext , ReactNode, useReducer , useContext} from "react";
import { IContextAuth } from "./types";
import { appLogic } from "./logicState";

interface IProps{
    children:ReactNode
}

const contextInit:IContextAuth = {
    user:"test1",
    basket:[]
}

const UserContext = createContext<IContextAuth>(contextInit)

export const useAuthContext = ()=>{
    return useContext(UserContext)
}

export const AuthProvider = ({children}:IProps) =>{
    const [auth , updateAuth] = useReducer( appLogic , contextInit)

    return (
    <UserContext.Provider value={auth}>
        { children}
    </UserContext.Provider>
    )

}

export default UserContext;