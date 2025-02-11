import { useState } from "react"
import Input from "../../common/fromControl"
import Button from "../../common/button"
import { authStyles, styles } from "../../../data/styles"


const SignInForm = () => {
  //states
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  return (
      <form>
          <Input id="email" state={name} setState={setName} autoComplete="email">Email</Input>
          <Input id="password" type="password" state={password} setState={setPassword}>Password</Input>
          <Button className={`w-full block mx-auto ${styles.mdM} ${styles.secondColor} ${authStyles.btnHover}`}>Sign in</Button>
      </form>
  )
}

export default SignInForm