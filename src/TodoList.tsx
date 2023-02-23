import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {filterValuesType} from "./App";

export type taskType = {
    id: string,
    title: string,
    isDone: boolean
}

type propsType = {
    title: string
    tasks: Array<taskType>
    removeTask: (id: string) => void
    changeFilter: (value: filterValuesType) => void
    addTask: (title: string) => void
}

function TodoList(props: propsType) {
    const [taskTitle, setTaskTitle] = useState("");
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.currentTarget.value)
    }
    const onAddNewTask = () => {
        props.addTask(taskTitle);
        setTaskTitle("")
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            props.addTask(taskTitle);
            setTaskTitle("")
        }
    }
    return (
        <div className='task'>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={taskTitle}
                    onChange={onChangeHandler}
                    onKeyDown={onKeyDownHandler}
                />
                <button
                    onClick={onAddNewTask}
                >+
                </button>
            </div>
            <ul>
                {
                    props.tasks.map(task => {
                        const onRemoveHandler = () => {
                            props.removeTask(task.id)
                        }
                        return <li key={task.id}><input type='checkbox' checked={task.isDone}/>
                            <span>{task.title}</span>
                            <button onClick={onRemoveHandler}>x</button>
                        </li>
                    })
                }
            </ul>
            <button onClick={() => props.changeFilter('ALL')}>ALL</button>
            <button onClick={() => props.changeFilter('Active')}>Active</button>
            <button onClick={() => props.changeFilter('Completed')}>Completed</button>
        </div>
    );
}

export default TodoList;