import React from 'react';
import './App.css';
import TodoList, {taskType} from "./TodoList";

function App() {
    let tasks1: Array<taskType> = [
        {id: 1, title: 'CSS', isDone: true},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'React', isDone: true},
    ]

    let tasks2 = [
        {id: 1, title: 'JSX', isDone: true},
        {id: 2, title: 'Angular', isDone: false},
        {id: 3, title: 'Vue', isDone: true},
    ];

  return (
    <div className="App">
      <TodoList title='program1' tasks={tasks1} />
      <TodoList title='program2' tasks={tasks2} />
    </div>
  );
}

export default App;
