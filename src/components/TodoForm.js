import React from 'react';
import {StateContext} from "../StateManagement";
import {UPDATE_TODO_LIST} from "../reducers";

class TodoForm extends React.Component {

    state = {
        todoText: ''
    };

    // contextType: COMPULSORY

    static contextType = StateContext;

    changeText = event => {
        this.setState({
            todoText: event.target.value
        })
    };

    render() {
        const dispatch = this.context[1];
        const update = () => {
            dispatch({
                type: UPDATE_TODO_LIST,
                content: this.state.todoText
            });
            this.setState({
                todoText: ''
            });
        };

        return (
            <form style={{display: 'flex'}} onSubmit={event => {
                event.preventDefault();
                update();
            }}>
                <input value={this.state.todoText}
                       onChange={this.changeText}/>
                <button onClick={update}>OK
                </button>
            </form>
        );
    }
}

export default TodoForm;