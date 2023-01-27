import "./style.css";

const Container = ({children, title}) => (
    <main>
        <h1 className="header">{title}</h1>
        {children}
    </main>
);

export default Container;