import React from "react";
import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfile } from "../../firebase/firebase.utils";

// REMEMBER TO ENABLE EMAIL/PASS SIGN IN IN FIREBASE

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  // handleSubmit is also async await
  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Please try again! Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfile(user, { displayName });
      // destructuring

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span> Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Your Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Your Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Your Password"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Your Password"
            onChange={this.handleChange}
            required
          />
          <CustomButton type="Submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
