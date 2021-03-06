import React, { Component } from "react";
import propType from "prop-types";

import AuthContext from "../../../context/auth-context";

import Aux from "../../../hoc/Aux";
import WithClass from "../../../hoc/WithClass";

import classes from "./Person.module.css";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  };





  render() {
    return (
      <Aux>
        <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
          }
        </AuthContext.Consumer>
        <p onClick={this.props.click}>Name: {this.props.name}</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propType = {
  click: propType.func,
  name: propType.string,
  onChange: propType.func,
};

export default WithClass(Person, classes.Person);
