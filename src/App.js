import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        person: [
            {name: 'Tahar', age: 32},
            {name: 'Max', age: 28},
            {name: 'Mimi', age: 34},
        ]
    };

    switchNameHandler = (newName) => {
        // console.log('tahar');
        // Don't do that at all => this.state.person[0].name = 'Mohamed Tahar';
        this.setState({
            person: [
                {name: 'Tahar', age: 32},
                {name: 'Max', age: 28},
                {name: 'Mimi', age: 35}
            ]
        });
    };

    changeNameHandler = (event) => {
        this.setState({
            person: [
                {name: 'Tahar', age: 32},
                {name: event.target.value, age: 28},
                {name: 'Mimi', age: 35},
            ]
        });
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={this.switchNameHandler.bind(this, 'Benkara Mohamed Tahar')}>
                    Switch Name
                </button>
                <Person
                    name={this.state.person[0].name}
                    age={this.state.person[0].age} />
                <Person
                    name={this.state.person[1].name}
                    age={this.state.person[1].age}
                    click={() => this.switchNameHandler('Tahar Mohamed')}
                    change={this.changeNameHandler}>
                    My hobbies: football</Person>
                <Person
                    name={this.state.person[2].name}
                    age={this.state.person[2].age} />
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App'));
    }
}

export default App;
