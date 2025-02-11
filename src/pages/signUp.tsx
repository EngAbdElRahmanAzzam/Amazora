import FormBox from "../components/common/formBox"
import FormTitle from "../components/common/formTitle"
import {classes, styles } from "../data/styles"
import { Link } from "react-router-dom"
import SignUpFrom from "../components/ui/auth/signUpFrom"

const SignUpPage = () => {

  return (
        <FormBox>
          
          <FormTitle>Create account</FormTitle>
          <SignUpFrom/>

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