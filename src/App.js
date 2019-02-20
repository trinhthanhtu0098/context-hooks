import React, {Component} from 'react';
import './App.css';
import {StateProvider} from "./StateManagement";
import initialState from "./state";
import reducer from "./reducers";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends Component {

    initialState = initialState;
    reducer = reducer;

    render() {
        return (
            <StateProvider initialState={this.initialState} reducer={this.reducer}>
                <div className="App">
                    <TodoForm/>
                    <TodoList/>
                </div>
            </StateProvider>
        );
    }
}

export default App;
