import React from "react";
import { useHistory } from "react-router";
import PrimaryButton from "../Buttons/PrimaryButton.component";
import { SignInContainer, SignInFormContainer } from "../SignIn/SignIn.style";

const SignUpContent = () => {
  const history = useHistory();
  return (
    <>
      {" "}
      <SignInContainer>
        <SignInFormContainer>
          <h1>Register</h1>
          <br />
          <p>Please fill in the information below:</p>
          <form>
            <div className="input__wrap">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" />
            </div>

            <div className="input__wrap">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" />
            </div>

            <div className="input__wrap">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>

            <div className="input__wrap">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
              <span>Forget password ?</span>
            </div>
            {/* <button type="submit"></button> */}
            <PrimaryButton>Login</PrimaryButton>
          </form>
          <p>
            Already have an account ?
            <span onClick={() => history.push("/sign-in")}> Log in</span>
          </p>
        </SignInFormContainer>
      </SignInContainer>
    </>
  );
};

export default SignUpContent;
