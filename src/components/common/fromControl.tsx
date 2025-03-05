import React from 'react'
import { styles } from '../../data/styles';

interface IProps  extends React.ComponentProps<"input">{
    className ?:string;
    id:string;
    state:any;
    setState : (val:any)=>void;
    children : React.ReactNode;
}

const Input = ({state, setState, id , className ,children,...rest}:IProps) => {

    //handlers
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setState(e.target.value)
    }

    return (
       <div className={`flex flex-col ${styles.smM}`}>
            <label htmlFor={id} className='font-extralight'>{children}</label>

            <div>
                <input 
                    className={`w-full py-1 border-2 rounded-md ${styles.smPx} ${(className)? className:""}`}
                    id={id} 
                    value={state} 
                    onChange={onChange} 
                    {...rest}
                />
            </div>
       </div>
    )
} 

export default Input