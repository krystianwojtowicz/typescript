import React from "react";

interface TaskProps {
  task: Todo;
  changeTaskStatus: changeTaskStatus;
}

const style = {
  color: 'red',
}
const style1 = {
  color: 'black',
}

export const Task: React.FC<TaskProps> = ({ task, changeTaskStatus }) => {
  return (
    <div>
      <p>

        <strong style={task.important ? style : style1}>{task.text}</strong> - do <span>{task.date} </span>
        <button onChange={() => changeTaskStatus(task.id)}>Zostało zrobione</button>
      </p>
    </div>
  )

}