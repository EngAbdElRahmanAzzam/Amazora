interface IProps{
    className?:string;
    children:React.ReactNode
}

const FormBox = ({className, children}:IProps) => {
  return (
    <div className={`w-96 mx-auto p-6 border-2 rounded-lg ${className}`}>
        {
            children
        }
    </div>
  )
}

export default FormBox