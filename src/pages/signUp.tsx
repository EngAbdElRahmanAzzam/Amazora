import Button from "../components/common/button"
import Input from "../components/common/fromControl"
import FormBox from "../components/common/formBox"
import FormTitle from "../components/common/formTitle"
import { useState } from "react"
import { classes, styles } from "../data/styles"
import { Link } from "react-router-dom"

const SignUpPage = () => {
  //states
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRePassword] = useState('')
  
  return (
        <FormBox>
          <FormTitle>Create account</FormTitle>
          <Input id="name" state={name} setState={setName}>Full Name</Input>
          <Input id="email" state={email} setState={setEmail}>Email</Input>
          <Input id="password" type="password" state={password} setState={setPassword}>Password</Input>
          <Input id="re-password" type="password" state={repassword} setState={setRePassword}>Re-Password</Input>
          <Button className={`w-80 block mx-auto ${styles.mdM} ${styles.secondColor}`}>Continue</Button>

          <p className="text-sm font-light mx-auto">
            By continuing, you agree to Amazora's Conditions of Use and <Link className={classes.link} to="/privacy">Privacy Notice.</Link>
          </p>
          {/* divider */}
          <div className={`border ${styles.mdM}`}></div>

          <p>
              Already have an account? <Link className={classes.link} to="/auth/sign-in">Sign in</Link>
          </p>

        </FormBox>
  )
}


 export default SignUpPage