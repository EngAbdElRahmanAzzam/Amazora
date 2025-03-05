import { IContextAuth } from "./types"

type TActionTypes = "SET_USER"

interface IAction {
    type:TActionTypes
    action:unknown
}

type TAppLogicReducer = (state:any,action:IAction) => IContextAuth 

export const appLogic:TAppLogicReducer =(state , payload) => { 
    switch(payload.type)
    {
        case "SET_USER":
            console.log('action', payload.action)
            return {
                ...state
                ,
                user: payload.action
            }
    }
}