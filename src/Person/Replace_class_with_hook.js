// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

const app = props => {
    const [personsState, setPersonsState] = useState({
        person: [
            {name: 'Tahar', age: 32},
            {name: 'Max', age: 28},
            {name: 'Mimi', age: 34},
        ]
    });

    const [otherState, setOtherState] = useState({otherState: 'some other value'});
    console.log(personsState, otherState);


    const switchNameHandler = () => {
        // console.log('tahar');
        // Don't do that at all => this.state.person[0].name = 'Mohamed Tahar';
        setPersonsState({
            person: [
                {name: 'Mohamed Tahar', age: 32},
                {name: 'Max', age: 28},
                {name: 'Mimi', age: 35},
            ]
        });
    };

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.person[0].name} age={personsState.person[0].age} />
            <Person name={personsState.person[1].name} age={personsState.person[1].age} >My hobbies: football</Person>
            <Person name={personsState.person[2].name} age={personsState.person[2].age} />
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App'));
}

export default app;