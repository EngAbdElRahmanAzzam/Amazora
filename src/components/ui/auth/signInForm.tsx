import { useState } from "react"
import Input from "../../common/fromControl"
import Button from "../../common/button"
import { authStyles, styles } from "../../../data/styles"
import Loader from "../../common/loader"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../firebase"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { useupdateAuthContext } from "../../../context/auth"


const SignInForm = () => {
  const navigate  = useNavigate();
  const updateAuth = useupdateAuthContext()
  //states
  const [isLoading, updateIsLoading] = useState<boolean>(false) 
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  //handlers
  const onSubmitHandler = async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    updateIsLoading(false)
    try{
      const {user} =await signInWithEmailAndPassword(auth,email, password)
      toast.success("Succsessful sign in, Wellcome back",{
        cancel:{
            label: 'Cancel',
            onClick: () => console.log(),
        }
      })
      updateAuth({type:'SET_USER', user:user.email})
      navigate('/')
    }catch(error:any){
      let msg = error.message
      if(msg == undefined)
      {
         msg = "failed register retry again"
      }
      toast.error(msg,{
          cancel:{
              label: 'Cancel',
              onClick: () => console.log(),
          }
      })
    }
    finally{
      updateIsLoading(false)
    }
  }

  return (
      <form onSubmit={onSubmitHandler}>
          <Input id="email" state={email} setState={setEmail} autoComplete="email">Email</Input>
          <Input id="password" type="password" state={password} setState={setPassword}>Password</Input>
          <Button 
          className={`w-full block mx-auto ${styles.mdM} ${styles.secondColor} ${authStyles.btnHover}`}
          disabled={isLoading}
          >
            Sign in
            {
                isLoading && <Loader/>
            }
            </Button>
      </form>
  )
}

export default SignInForm