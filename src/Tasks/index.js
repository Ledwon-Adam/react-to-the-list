import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul>
        {tasks.map(task => (
            <li
                key={task.id}
                className={`${hideDoneTasks && task.done ? "list__disabled" : "list"}`}
            >
                <button className="list__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`list__item${task.done ? " list__item--done" : ""}`}>
                    {task.content}
                </span>
                <button className="list__button--remove">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;