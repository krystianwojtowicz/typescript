import React, { useState } from 'react';
import { AddTask } from './AddTask';
import { TaskList } from "./TaskList";

const initialTasks: Array<Todo> = [{
  id: 0,
  text: 'kupić rower',
  date: '2020-12-15',
  important: true,
  active: true,
  finishDate: null
},
{ id: 1, text: "zrobić siłownię", date: '2020-11-12', important: false, active: true, finishDate: null },
{ id: 2, text: "pomalować dom", date: '2020-09-11', important: false, active: true, finishDate: null },
{ id: 3, text: "schudnąć 10 kilogramów", date: '2020-11-20', important: true, active: true, finishDate: null },
{ id: 4, text: "kupić samochód", date: '2020-11-12', important: false, active: true, finishDate: null },
{ id: 5, text: "wizyta u dentysty", date: '2020-09-11', important: false, active: true, finishDate: null },
{ id: 6, text: "wizyta u okulisty", date: '2020-11-20', important: true, active: true, finishDate: null },
{ id: 7, text: "kupić telewizor", date: '2020-11-12', important: false, active: true, finishDate: null },
];

const App: React.FC = () => {
  let counter: number = 8
  const [tasks, setTasks] = useState(initialTasks);


  const changeTaskStatus: changeTaskStatus = id => {
    const newTasks = Object.assign([], tasks);
    // const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    setTasks(
      newTasks
    )
  }



  const addTask: AddTask = (newTask, newDate, importance) => {
    setTasks([...tasks, { id: counter, text: newTask, date: newDate, important: importance, active: true, finishDate: null }]);
  };
  counter++;
  return (
    <>
      <TaskList tasks={tasks} changeTaskStatus={changeTaskStatus} />
      <AddTask addTask={addTask} />
    </>
  );
}

export default App;
