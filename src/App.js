import {useState} from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";




function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState ([
    { id: 1, content: "Przejść na Reacta", done: true },
    { id: 2, content: "Zjeść śniadanie", done: false },
    { id: 3, content: "Zjeść obiad", done: false },
    { id: 4, content: "Zjeść kolacje", done: true },
  ]);

  const toogleHideDone = () => setHideDone (setHideDone => !setHideDone);

  const removeTask = (id) => {
    setTasks (tasks => tasks.filter(task => task.id !== id));
  };

  const toogleTaskDone = (id) => {
    setTasks (task => task.map(task => {
      if (task.id === id){
        return {...task, done: !task.done};
      }

      return task;
    }));
  };

  const setAllDone = () => {
    setTasks (tasks => tasks.map(task=>({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content: content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id +1 : 1,
      },
    ]);
  };

  return (
    <Container title="Lista zadań">
      <Form addNewTask={addNewTask}/>
      <Section title="Lista zadań" 
      extraContent={
        <Buttons 
        tasks={tasks}
        hideDone={hideDone}
        toogleHideDone={toogleHideDone}
        setAllDone={setAllDone}/>
      }
      listContent={
        <Tasks 
        tasks={tasks}
        hideDone={hideDone}
        removeTask={removeTask}
        toogleTaskDone={toogleTaskDone} />
      }
      />
    </Container>
  );
};

export default App;
