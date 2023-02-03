import {useState} from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Przejść na Reacta", done: true },
  { id: 2, content: "Zjeść śniadanie", done: false },
  { id: 3, content: "Zjeść obiad", done: false },
  { id: 4, content: "Zjeść kolacje", done: true },
];



function App() {
  const [hideDone, setHideDone] = useState(false);
  const toogleHideDone = () => setHideDone (setHideDone => !setHideDone);

  return (
    <Container title="Lista zadań">
      <Form title="Dodaj nowe zadanie"/>
      <Section title="Lista zadań" 
      extraContent={
        <Buttons tasks={tasks} hideDone={hideDone} toogleHideDone={toogleHideDone}/>
      }
      listContent={
        <Tasks tasks={tasks} hideDone={hideDone}/>
      }
      />
    </Container>
  );
};

export default App;
