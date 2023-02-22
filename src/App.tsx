import React, {useState} from 'react';
import './App.css';
import TodoList, {taskType} from "./TodoList";

export type filterValuesType = 'ALL' | 'Active' | 'Completed'

function App() {

    const [tasks, setTasks] = useState<Array<taskType>>([
        {id: 1, title: 'CSS', isDone: true},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'React', isDone: true},
        {id: 4, title: 'Redux', isDone: false},
    ])
    const [filter, setFilter] = useState<filterValuesType>('ALL')
    const removeTask = (id: number) => {
        setTasks(
            tasks.filter(task => task.id !== id)
        )
    }

    let filteredTasks = tasks
    let changeFilter = (value: filterValuesType) => {
        setFilter(value)
    }
    if (filter === 'Active') {
        filteredTasks = tasks.filter(t => t.isDone === false)
    }

    if (filter === 'Completed') {
        filteredTasks = tasks.filter(t => t.isDone === true)
    }


    return (
        <div className="App">
            <TodoList title='program1' tasks={filteredTasks} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
