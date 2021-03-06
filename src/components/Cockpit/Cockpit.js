import React, { useEffect, useRef } from "react";

import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js]");
    toggleBtnRef.current.click();
    return () => {
      console.log(["Cockpit.js cleanup work in 2nd useEffect"]);
    };
  }, []);

  const assignedClasses = [];
  let btnClass = "";
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
      <p className={assignedClasses.join(" ")}>Estado</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        // alt={this.state.showPersons}
        onClick={props.clicked}
      >
        Click here!
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
