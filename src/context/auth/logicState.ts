import { IContextAuth } from "./types"

type TAppLogicReducer = (state:any,action:any) => IContextAuth 

export const appLogic:TAppLogicReducer =(state , action) => { 
    switch(action.type)
    {
        case "SET_USER":
            return {
                ...state
                ,
                user: action.user
            }
    }
}