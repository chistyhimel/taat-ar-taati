import React from "react";
import { useHistory } from "react-router";
import PrimaryButton from "../Buttons/PrimaryButton.component";
import { SignInContainer, SignInFormContainer } from "./SignIn.style";

const SignInContent = () => {
  const history = useHistory();
  return (
    <>
      <SignInContainer>
        <SignInFormContainer>
          <h1>Login</h1>
          <br />
          <p>Please enter your email and password:</p>
          <form>
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
            Don't have an account ?{" "}
            <span onClick={() => history.push("/sign-up")}>Create one</span>
          </p>
        </SignInFormContainer>
      </SignInContainer>
    </>
  );
};

export default SignInContent;
