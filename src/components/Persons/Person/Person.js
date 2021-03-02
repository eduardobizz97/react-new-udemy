import React, { Component } from 'react';

import propType from 'prop-types';


import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithClass';


import classes from './Person.module.css';
import { ThemeConsumer } from 'styled-components';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        this.inputElementRef.current.focus();
    };


    render() {
        return (
            <Aux>
                <p onClick={this.props.click}>
                    Name: {this.props.name}
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    ref={this.inputElementRef}
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