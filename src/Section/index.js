import "./style.css";

const Section = ({ title, extraContent, listContent }) => (
  <section>
    <header className="section__header">
      <h2 className="section__listName">{title}</h2>
      {extraContent}
    </header>
    <div className="section__list">
      {listContent}
    </div>
  </section>
);


export default Section;