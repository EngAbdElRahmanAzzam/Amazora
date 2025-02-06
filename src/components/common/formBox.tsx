interface IProps{
    className?:string;
    children:React.ReactNode
}

const FormBox = ({className, children}:IProps) => {
  return (
    <div className={`sm:w-72 md:w-96 mx-auto p-6 border-2 rounded-lg ${(className)? className:""}`}>
        {
            children
        }
    </div>
  )
}

export default FormBox