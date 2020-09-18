import React, { useState } from "react";
import { connect } from "react-redux";
import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
// FormInput and CustomButton become a reusable component for signin sign up register...
import CustomButton from "../custom-button/custom-button.component";
// sign in with Google

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredential;
  // turn handleSubmit into async and use sagas
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  // destructuring
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredential({ ...userCredential, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span> Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />

        <FormInput
          name="password"
          type="password"
          label="Password"
          handleChange={handleChange}
          value={password}
          required
        />

        <CustomButton type="submit"> Sign In </CustomButton>
        <CustomButton type="button" onClick={googleSignInStart} isGoogle>
          Sign In with Google
        </CustomButton>
      </form>
    </div>
  );
};

// if you don't pass in a value for isGoogle, it will set as true

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
