import React, { Component } from "react";

export class RegisterAuth extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    window.location = "http://localhost:4000/login";
  }
  render(){
    return (<section>Redirecting...</section>);
  }
}

export default RegisterAuth;
