import { authStyles, styles } from "../../data/styles";

interface IProps{
    className?:string;
    children:React.ReactNode
}

const FormBox = ({className, children}:IProps) => {
  return (
    <div className={`mx-auto p-6 border-2 rounded-lg ${authStyles.formWidth} ${styles.mdM} ${(className)? className:""}`}>
        {
            children
        }
    </div>
  )
}

export default FormBox