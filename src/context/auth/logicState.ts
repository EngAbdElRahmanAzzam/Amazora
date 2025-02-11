import { IContextAuth } from "./types"

type TAppLogicReducer = (action:any) => IContextAuth 

export const appLogic:TAppLogicReducer =(action) => { 
    switch(action.type)
    {
        case "SET_USER":
    }
}