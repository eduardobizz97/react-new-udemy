import { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';

import Persons from '../components/Persons/Persons';

import classes from './App.module.css';

class App extends Component {

  state = {
    persons: [
      { id: 'as', name: "Eduardo", edad: 23 },
      { id: '1sad', name: "Vivi", edad: 20 },
      { id: 'asd', name: "Vivi", edad: 20 },
    ],
    showPersons: false

  };

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;


    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  };

  togglePersonHandler = () => {

    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    });

  };


  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />
    }

    return (

      <div className={classes.App}>

        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonHandler}/>
        {persons}

      </div>

    );
  };


};

export default App;
