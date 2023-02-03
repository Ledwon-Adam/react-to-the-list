import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
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
                <button onClick={() =>removeTask(task.id)}className="list__button--remove">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;