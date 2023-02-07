import "./style.css";

const Buttons = ({ tasks, hideDone, toogleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <div className="section__buttons ">
            <button onClick={toogleHideDone} className="section__button">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button> 
            <button 
                onClick={setAllDone}
                className="section__button"
                disabled={tasks.every(({ done }) => done)}   
            >
                Ukończ wszystkie 
            </button>
        </div>
    )
);

export default Buttons;