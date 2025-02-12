import { useState } from "react"
import { authStyles, styles } from "../../../data/styles"
import Button from "../../common/button"
import Input from "../../common/fromControl"
import { createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from "../../../firebase"
import Loader from "../../common/loader"
import { toast } from "sonner"



const SignUpFrom = () => {
    //states

    //logic
    const [isLoading, updateIsLoading] = useState<boolean>(false)

    //form
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repassword, setRePassword] = useState<string>('')
    
    //handlers
    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        updateIsLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success("Succsessful sign up, Wellcome",{
                cancel:{
                    label: 'Cancel',
                    onClick: () => console.log(),
                }
            })
        } catch (error:any) {
            let msg = "failed register retry again"
            toast.error(msg,{
                cancel:{
                    label: 'Cancel',
                    onClick: () => console.log(),
                }
            })
        } finally {
            updateIsLoading(false);
        }
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <Input id="name" state={name} setState={setName}>Full Name</Input>
            <Input id="email" state={email} setState={setEmail}>Email</Input>
            <Input id="password" type="password" state={password} setState={setPassword}>Password</Input>
            <Input id="re-password" type="password" state={repassword} setState={setRePassword}>Re-Password</Input>

            <Button 
            className={`w-full block mx-auto ${styles.mdM} ${styles.secondColor} ${authStyles.btnHover}`}
            type="submit"
            disabled={isLoading}
            >Continue 
            {
                isLoading && <Loader/>
            }
            </Button>
        </form>
    )
  }
  
  
   export default SignUpFrom