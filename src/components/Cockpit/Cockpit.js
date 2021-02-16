import React, { useEffect } from 'react';

import classes from './Cockpit.module.css';

const Cockpit = props => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        return () => {
            alert('cleanup work in useEfft');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js]');
        return () => {
            console.log(['Cockpit.js cleanup work in 2nd useEffect']);
        };
    });

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
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

export default React.memo(Cockpit);


