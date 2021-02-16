import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';

import classes from './Person.module.css';

class Person extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.Person}>
                    <p onClick={this.props.click}>
                       Name: {this.props.name}
                    </p>
                    <p>{this.props.children}</p>
                    <input
                        type="text"
                        onChange={this.props.changed}
                        value={this.props.name} />
                </div>
            </Aux>
        );
    }
}

export default Person;