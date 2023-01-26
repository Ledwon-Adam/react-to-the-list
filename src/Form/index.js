import "./style.css";

const Form = ({title}) => (
    <section className="container">
        <form className="form">
            <h2 className="container__header">{title}</h2>
            <div className="flex__container">
                <input className="flex__input" placeholder=" Co jest do zrobienia?" autoFocus />
                <button className="flex__button">Dodaj zadanie</button>
            </div>
        </form>
    </section>
);

export default Form;