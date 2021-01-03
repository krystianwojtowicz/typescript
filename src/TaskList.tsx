import React from 'react';
import { Task } from './Task';

interface TaskListProps {
    tasks: Array<Todo>
    changeTaskStatus: changeTaskStatus;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, changeTaskStatus }) => {
    return (
        <ul>
            {tasks.map(task => {
                return <Task key={task.id} task={task} changeTaskStatus={changeTaskStatus} />;
            })}
        </ul>
    );
};