import React from 'react';
import {getState} from "../StateManagement";

const TodoList = () => {
    const [{todoList}, dispatch] = getState();

    return (
        <div>
            {todoList.map(item => (
                <div key={item.key}>{item.key} - {item.content}
                    <button onClick={() => {
                        dispatch({
                            type: 'deleteItem',
                            key: item.key
                        })
                    }}>Delete
                    </button>
                </div>
            ))}
        </div>
    )
};

export default TodoList;