import Button from "../components/common/button"
import Input from "../components/common/fromControl"
import FormBox from "../components/common/formBox"
import FormTitle from "../components/common/formTitle"
import { useState } from "react"
import { styles } from "../data/styles"
import { Link } from "react-router-dom"

const SignUpPage = () => {
  //states
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRePassword] = useState('')
  return (
      <div>
        <FormBox>
          <FormTitle>Sign Up</FormTitle>
          <Input id="email" state={name} setState={setName}>Email</Input>
          <Input id="email" type="password" state={password} setState={setPassword}>Password</Input>
          <Input id="email" type="password" state={repassword} setState={setRePassword}>Re-Password</Input>
          <Button className={`w-80 block mx-auto ${styles.mdM} ${styles.secondColor}`}>Sign in</Button>
          <p className="text-sm font-light mx-auto">
            By continuing, you agree to Amazora's Conditions of Use and <Link className={`${styles.textMainColor} font-semibold underline`} to="/privacy">Privacy Notice.</Link>
          </p>
        </FormBox>

        <Button className="w-80 border-2"><Link to="/auth/sign-up">Create your Amazon account</Link></Button>
      </div>
  )
}


 export default SignUpPage