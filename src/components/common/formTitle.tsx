import { styles } from "../../data/styles";

interface IProps extends React.ComponentProps<"h2">{
    className?:string;
    children:React.ReactNode
}

const FormTitle = ({className, children}:IProps)=>{
    return (
        <h2 className={`text-2xl font-bold ${styles.smM} ${(className)? className:""}`}>
            {
                children
            }
        </h2>
    )
}

export default FormTitle