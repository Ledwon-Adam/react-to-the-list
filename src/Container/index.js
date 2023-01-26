import "./style.css";

const Container = ({children, title}) => (
    <main className="body, body__background">
        <h1 className="header">{title}</h1>
        {children}
    </main>
);

export default Container;