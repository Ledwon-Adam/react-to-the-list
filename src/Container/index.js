import "./style.css";

const Container = ({children, title}) => (
    <body className="body, body__background">
        <h1 className="header">{title}</h1>
        {children}
    </body>
);

export default Container;