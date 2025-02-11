import { useState } from "react"
import { authStyles, styles } from "../../../data/styles"
import Button from "../../common/button"
import Input from "../../common/fromControl"


const SignUpFrom = () => {
    //states
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')
    
    return (
        <form>
            <Input id="name" state={name} setState={setName}>Full Name</Input>
            <Input id="email" state={email} setState={setEmail}>Email</Input>
            <Input id="password" type="password" state={password} setState={setPassword}>Password</Input>
            <Input id="re-password" type="password" state={repassword} setState={setRePassword}>Re-Password</Input>
            <Button className={`w-full block mx-auto ${styles.mdM} ${styles.secondColor} ${authStyles.btnHover}`}>Continue</Button>
        </form>
    )
  }
  
  
   export default SignUpFrom