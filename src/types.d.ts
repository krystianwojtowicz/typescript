type Todo = {
    id: number;
    text: string;
    date: string;
    important: boolean;
    active: boolean;
    finishDate: null | number;
}

type changeTaskStatus = (id: number) => void;

type AddTask = (newTask: string, newDate: string, importance: boolean) => void;