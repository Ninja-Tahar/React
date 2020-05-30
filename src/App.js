import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { id: 0, name: 'Tahar', age: 32 },
            { id: 1, name: 'Max', age: 28 },
            { id: 2, name: 'Mimi', age: 34 }
        ],
        otherState: 'some other value',
        showPersons: false
    };

    deletePersonHandler = (indexPerson) => {
      // const newPersons = this.state.persons.slice();
        const newPersons = [...this.state.persons];
        newPersons.splice(indexPerson, 1);
      this.setState({persons : newPersons})
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(idP => {
           return idP.id === id;
        });

        // const person = Object.assign({}, this.state.persons[personIndex]);

        // adding a new object name it person
        const person = {...this.state.persons[personIndex]};

        // modify properties  name for this object
        person.name = event.target.value;

        // Creating a copier for Persons Array
        const persons = [...this.state.persons];

        // modify the name for this array.
        persons[personIndex] = person;

        // Updating the object.
        this.setState( {persons: persons})
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState( { showPersons: !doesShow } );
    };

    render () {
        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'salmon',
                color: 'blue'
            }
        };

        let persons = null;

        if ( this.state.showPersons ) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                            return <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={(event) => this.nameChangedHandler(event, person.id)} />
                        })}
                </div>
            );

            if (this.state.persons.length !== 0) {
                style.backgroundColor = 'red';
            }
            style[':hover'] = {
                backgroundColor: 'blue',
                color: 'black'
            };
        }

        let classes = [];

        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }
        if (this.state.persons.length === 0) {
            classes.splice(0, 2);
        }

        return (
            <StyleRoot>
                <div className="App">
                    <h1>Hi, I'm a React App</h1>
                    <p className={classes.join(' ')}>This is really working!</p>
                    <button
                        style={style}
                        onClick={this.togglePersonsHandler}>Toggle Persons</button>
                    {persons}
                    </div>
            </StyleRoot>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default Radium(App);