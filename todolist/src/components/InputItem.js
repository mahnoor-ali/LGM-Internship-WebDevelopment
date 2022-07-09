import React, { useEffect } from 'react'
import ListItem from './ListItem';

export default function InputItem() {

    const [todoList, setTodoList] = React.useState([]);
    const [todo, setTodo] = React.useState([]);
    const [task, setTask] = React.useState('');

    //set new todo item to the prop
    const addTodo = (event) => {
        event.preventDefault();
        setTodo([...todo, task]);
        document.getElementById('addTask').value = '';
    }

    // add todo item to local storage as soon as prop 'todo' changes    
    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todo));
    }, [todo])
    
    //update the task input value
    const setTodoItem = (event) => {
        setTask(event.target.value);
    }

    return (
        <form >
            <div className="mb-3">
                <input placeholder='Add a new task' type='text' id="addTask" aria-describedby="addTask" onChange={setTodoItem} />
                <button onClick={addTodo} id="addButton">Add</button>
            </div>
        </form>
    )
}
