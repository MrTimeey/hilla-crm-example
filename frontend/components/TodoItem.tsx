import {ToDo} from "../types.ts";
import TodoTO from "Frontend/generated/com/example/application/data/TodoTO.ts";

interface TodoItemProps extends TodoTO {
    toggleTodo: (id: string, completed: boolean) => void;
    deleteTodo: (id: string) => void;

}

export default function TodoItem({id, title, completed, toggleTodo, deleteTodo}: TodoItemProps) {
    return (
        <li>
            <label>
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(id??'', e.target.checked)}/>
                {title}
            </label>
            <button onClick={() => deleteTodo(id??'')} className="btn btn-danger">Delete</button>
        </li>
    )
}
