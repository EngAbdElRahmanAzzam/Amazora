import Button from "../components/common/button"
import Input from "../components/common/fromControl"
import FormBox from "../components/common/formBox"
import FormTitle from "../components/common/formTitle"
import { useState } from "react"
import { authStyles, classes, styles } from "../data/styles"
import { Link } from "react-router-dom"
import DownArrowIcon from "../asserts/icons/downArrowIcon"
const NeedHelp = () =>{
  //states
  const [isActive , updateIsActive] = useState<boolean>(false)
  // handlers
  const toggleActive = ()=> updateIsActive(!isActive)
  return (
    <div>
      <button onClick={toggleActive} className="flex">
        <DownArrowIcon className={`transition-all ${(isActive)?"rotate-180" : ""}`} 
        />Need Help</button>
      <Link 
      className={`${classes.link} ml-8 custom-trai block overflow-hidden ${(isActive)?"h-7" : "h-1"}`} 
      to=""
      >Forget Password</Link>

    </div>
  )
}
const SignInPage = () => {
  //states
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  return (
      <div>
        <FormBox>
          <FormTitle>Sign in</FormTitle>
          <Input id="email" state={name} setState={setName} autoComplete="email">Email</Input>
          <Input id="password" type="password" state={password} setState={setPassword}>Password</Input>
          <Button className={`w-full block mx-auto ${styles.mdM} ${styles.secondColor} ${authStyles.btnHover}`}>Sign in</Button>
          <p className="text-sm font-light mx-auto">
            By continuing, you agree to Amazora's Conditions of Use and <Link className={`${styles.textMainColor} font-semibold underline`} to="/privacy">Privacy Notice.</Link>
          </p>
          <NeedHelp/>
        </FormBox>
        {/* divider */}
        <div className={`font-light relative border mx-auto ${styles.mdM} ${styles.xlgMt} ${authStyles.formWidth}`}>
          <p className="bg-white px-2 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 ">New To Amazora</p>
        </div>


        <Button className={`block mx-auto border border-black transition-all hover:bg-black hover:text-white ${styles.mdM} ${authStyles.formWidth}`}>
          <Link to="/auth/sign-up">Create your Amazon account</Link>
        </Button>

      </div>
  )
}

export default SignInPage