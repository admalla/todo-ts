import React, { useState } from "react";
import "./App.css";
import TodoList, { taskType } from "./TodoList";
import { v1 } from "uuid";

export type filterValuesType = "ALL" | "Active" | "Completed";

function App() {
  const [tasks, setTasks] = useState<Array<taskType>>([
    { id: v1(), title: "CSS", isDone: true },
    { id: v1(), title: "JS", isDone: false },
    { id: v1(), title: "React", isDone: true },
    { id: v1(), title: "Redux", isDone: false },
  ]);
  const [filter, setFilter] = useState<filterValuesType>("ALL");
  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  let filteredTasks = tasks;
  let changeFilter = (value: filterValuesType) => {
    setFilter(value);
  };
  if (filter === "Active") {
    filteredTasks = tasks.filter((t) => t.isDone === false);
  }

  if (filter === "Completed") {
    filteredTasks = tasks.filter((t) => t.isDone === true);
  }

  const addTask = (title: string) => {
    let newTask = { id: v1(), title: title, isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  };

  const addCheckboxTask = (id: string, check: boolean) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, isDone: check } : task))
    );
  };

  return (
    <div className="App">
      <TodoList
        title="program"
        tasks={filteredTasks}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        addCheckboxTask={addCheckboxTask}
      />
    </div>
  );
}

export default App;
