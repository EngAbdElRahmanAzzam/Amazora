import { ReactNode } from "react";

interface IProps{
    statusCode:number;
    errorMsg:string;
    children:ReactNode
}

const ErrorHandler =({statusCode, errorMsg , children}:IProps)=>{
    return (
        <div className="px-2 text-center">
            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="text-[250px] font-extrabold text-red-600">{statusCode}</h1>
                <p className="text-4xl font-medium text-black">{errorMsg}</p>
                <p className="text-xl text-black mt-4">{children}</p>
            </div>
        </div>
    )
}

export default ErrorHandler