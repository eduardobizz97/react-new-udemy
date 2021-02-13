import React from 'react';

import classes from './Cockpit.module.css';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass =  classes.Red;
    }
    
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, im a react app</h1>
            <p className={assignedClasses.join(' ')}>hi</p>
            <button
                className={btnClass}
                // alt={this.state.showPersons}
                onClick={props.clicked}>
                boton
            </button>
        </div>
    );
};

export default cockpit;


