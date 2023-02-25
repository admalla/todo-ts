import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { filterValuesType } from "./App";

export type taskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type propsType = {
  title: string;
  tasks: Array<taskType>;
  removeTask: (id: string) => void;
  changeFilter: (value: filterValuesType) => void;
  addTask: (title: string) => void;
  addCheckboxTask: (id: string, check: boolean) => void;
};

function TodoList(props: propsType) {
  const [taskTitle, setTaskTitle] = useState("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.currentTarget.value);
  };
  const onAddNewTask = () => {
    if (taskTitle) {
      props.addTask(taskTitle);
      setTaskTitle("");
    }
  };
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      taskTitle && props.addTask(taskTitle);
      setTaskTitle("");
    }
  };

  const onRemoveHandler = (id: string) => {
    props.removeTask(id);
  };
  const onClickHandler = (
    id: string,
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    props.addCheckboxTask(id, e.currentTarget.checked);
  };

  return (
    <div className="task">
      <h3>{props.title}</h3>
      <div>
        <input
          value={taskTitle}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
        <button onClick={onAddNewTask}>+</button>
      </div>

      <ul>
        {props.tasks.map((task) => {
          return (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.isDone}
                onClick={(e) => onClickHandler(task.id, e)}
              />
              <span>{task.title}</span>
              <button onClick={() => onRemoveHandler(task.id)}>x</button>
            </li>
          );
        })}
      </ul>

      <button onClick={() => props.changeFilter("ALL")}>ALL</button>
      <button onClick={() => props.changeFilter("Active")}>Active</button>
      <button onClick={() => props.changeFilter("Completed")}>Completed</button>
    </div>
  );
}

export default TodoList;
