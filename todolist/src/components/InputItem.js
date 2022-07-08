import React from 'react'

export default function InputItem() {
    return (
        <form >
            <div class="mb-3">
                <input placeholder='Add a new task' type='text' id="addTask" aria-describedby="addTask"/>
                <button id="addButton">Add</button>
            </div>
        </form>
    )
}
