import React, { Component } from "react";
import { connect } from "react-redux";
import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
// FormInput and CustomButton become a reusable component for signin sign up register...
import CustomButton from "../custom-button/custom-button.component";
// sign in with Google
import { auth } from "../../firebase/firebase.utils";
import { googleSignInStart } from "../../redux/user/user.action";
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  // turn handleSubmit into async await
  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // if sign in succeeds we will reset email / pass to empty string
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err.message);
    }
  };

  // destructuring
  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span> Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            label="Password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />

          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} isGoogle>
            Sign In with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}
// if you don't pass in a value for isGoogle, it will set as true

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
