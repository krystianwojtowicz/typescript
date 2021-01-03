import React, { FormEvent, ChangeEvent, useState } from 'react';

interface AddTaskProps {
    addTask: AddTask;
}

export const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
    const [newTask, setNewTask] = useState('');
    const [importance, setImportance] = useState(false || true);
    const [newDate, setDate] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
    };

    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setImportance(e.target.checked);
    };

    const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTask(newTask, newDate, importance);
    };
    return (
        <form>
            <input type="text" value={newTask} onChange={handleChange} />

            <input type="checkbox" checked={importance} id="important" onChange={handleCheckbox} />
            <label htmlFor="important">Priorytet</label>

            <label htmlFor="date">Do kiedy zrobić</label>
            <input type="date" value={newDate} onChange={handleDate} />

            <button type='submit' onClick={handleSubmit}>Add Task</button>
        </form>
    );
};