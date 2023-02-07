import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState ("");
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        (
            <section className="form">
                <form onSubmit={onFormSubmit}>
                    <h2 className="form__header">Dodaj nowe zadanie</h2>
                    <div className="form__container">
                        <input 
                        value={newTaskContent}
                        className="form__input" 
                        placeholder=" Co jest do zrobienia?" 
                        onChange={({ target }) => setNewTaskContent(target.value)} />
                        <button className="form__button">Dodaj zadanie</button>
                    </div>
                </form>
            </section>
        )
    )
};

export default Form;