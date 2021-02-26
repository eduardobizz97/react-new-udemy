import React, { Component } from 'react';

import propType from 'prop-types';


import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithClass';


import classes from './Person.module.css';

class Person extends Component {

    render() {
        return (
            <Aux>
                <p onClick={this.props.click}>
                    Name: {this.props.name}
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    ref={(inputEl)=>{
                        inputEl.focus();
                    }}
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>

        );
    };
};

Person.propType = {
    click: propType.func,
    name: propType.string,
    onChange: propType.func
};

export default WithClass(Person, classes.Person);