import "./style.css";

const Form = ({ title }) => (
    <section className="form">
        <form>
            <h2 className="form__header">{title}</h2>
            <div className="form__container">
                <input className="form__input" placeholder=" Co jest do zrobienia?" autoFocus />
                <button className="form__button">Dodaj zadanie</button>
            </div>
        </form>
    </section>
);

export default Form;