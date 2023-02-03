import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
    <ul>
        {tasks.map(task => (
            <li
                key={task.id}
                className={`${hideDone && task.done ? "list__disabled" : "list"}`}
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