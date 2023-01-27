import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Przejść na Reacta", done: true },
  { id: 2, content: "Zjeść obiad", done: false },
  { id: 3, content: "Zjeść kolacje", done: false },
  { id: 4, content: "Zjeść śniadanie", done: false },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container title="Lista zadań">
      <Form title="Dodaj nowe zadanie"/>
      <Section title="Lista zadań" 
      extraContent={
        <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
      }
      listContent={
        <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>
      }
      />
    </Container>
  );
};

export default App;
