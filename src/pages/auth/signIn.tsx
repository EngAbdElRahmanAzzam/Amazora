import Button from "../../components/common/button"
import FormBox from "../../components/common/formBox"
import FormTitle from "../../components/common/formTitle"
import { useState } from "react"
import { authStyles, classes, styles } from "../../data/styles"
import { Link } from "react-router-dom"
import DownArrowIcon from "../../asserts/icons/downArrowIcon"
import SignInForm from "../../components/ui/auth/signInForm"

const SignInPage = () => {
  return (
      <div>
        <FormBox>

          <FormTitle>Sign in</FormTitle>
          <SignInForm/>
          <p className="text-sm font-light mx-auto">
            By continuing, you agree to Amazora's Conditions of Use and <Link className={`${styles.textMainColor} font-semibold underline`} to="/privacy">Privacy Notice.</Link>
          </p>
          <SignInPage.NeedHelp/>

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

SignInPage.NeedHelp = () =>{
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

export default SignInPage