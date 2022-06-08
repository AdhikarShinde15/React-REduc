import React from "react";
import { connect } from "react-redux";
import { login,logout } from "../actions/auth";

export class Authentication extends React.Component {
  login = () => {
    this.props.login()
  }
  logout = () =>  {
    this.props.logout()
  }
  render() {
    return (
      <div>
        {!this.props.auth && (
          <div>
            <p>Login to View the Secret Mail</p>
            <button onClick={this.login}>Login</button>
          </div>
        )}
        {this.props.auth && (
          <div> 
            <p>Secret : adhikar090@gmail.com</p>
            <button onClick={this.logout}>Logout</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.authen.login
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login()),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
