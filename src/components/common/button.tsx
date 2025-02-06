import { styles } from "../../data/styles";

interface IProps extends React.ComponentProps<"button">{
    className?:string;
    children:React.ReactNode
}

const Button = ({className, children}:IProps)=>{
    return (
        <button className={`${styles.smPy}  rounded-lg ${(className)? className:""}`}>
            {
                children
            }
        </button>
    )
}

export default Button