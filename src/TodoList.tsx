import React from 'react';
import {filterValuesType} from "./App";

export type taskType = {
    id: number,
    title: string,
    isDone: boolean
}

type propsType = {
    title: string
    tasks: Array<taskType>
    removeTask: (id: number) => void
    changeFilter: (value: filterValuesType) => void
}

function TodoList(props: propsType) {
    return (
        <div className='task'>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(task =>
                    <li key={task.id}><input type='checkbox' checked={task.isDone}/>
                        <span>{task.title}</span>
                        <button onClick={() => props.removeTask(task.id)}>x</button>
                    </li>)}
            </ul>
            <button onClick={() => props.changeFilter('ALL')}>ALL</button>
            <button onClick={() => props.changeFilter('Active')}>Active</button>
            <button onClick={() => props.changeFilter('Completed')}>Completed</button>
        </div>
    );
}

export default TodoList;