import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authenticate } from "../store";

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className="form div-container">
      <form onSubmit={handleSubmit} name={name}>
        <div className="login">
          <div className="login-card">
            <p className="title">Log In</p>
            <input name="email" placeholder="Email" required />
            <input
              name="password"
              placeholder="Password"
              type="password"
              required
            />
            <button className="loader">Sign in</button>
            <p className="text">Don't have an account?</p>
            <Link to="/signup">
              <button className="buttonShadow" type="submit">
                Create new account
              </button>
            </Link>
          </div>
        </div>
        {error && <div> {error} </div>}
      </form>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */

const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",

    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(authenticate(email, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);

export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
