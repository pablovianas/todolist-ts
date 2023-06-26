import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { styled } from "styled-components";
import { Header } from "./components/Header"
import { NewTask } from "./components/NewTask";
import { TaskCounter } from "./components/TaskCounter";
import { NoTasksCreated } from "./components/NoTasksCreated";
import { TaskList } from "./components/TaskList";



function App() {
  const [taskDescription, setTaskDescription] = useState("");
  const [taskCreateCount, setTaskCreateCount] = useState(0);
  const [tasks, setTasks] = useState<{ task: string; taskDone: boolean }[]>([]);
 
  
  const handleTaskChange = (index: number) => {
    const taskList = [...tasks]
    const updatedTasks = taskList.map((task, i ) => {
        if(i === index){
          return {
              ...task,
              taskDone: !task.taskDone,
          };
        }
        return task
    })
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (index: number) => {
    const taskList = [...tasks] 
    const newTask = taskList.filter((_, i) => i !== index);
    setTasks(newTask)
    setTaskCreateCount(taskCreateCount - 1);
    toast.success("Tarefa removida com sucesso!");
  }

  const handleAddTask = (newTask: string, event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if(newTask.trim() === ""){
          toast.error("A tarefa não pode estar vazia!");
          return
      }
 
      if (tasks.length > 0) {
          const hasRepetadTask = tasks.some((task) => {
              if(task.task === newTask) {
                  toast.error("Já existe uma tarefa com essa descrição!")
                  return true
              }
          });
          if(hasRepetadTask) return;
      }

      const newTaskItem = { task: newTask, taskDone: false };
      setTasks((prevState) => [...prevState, newTaskItem]);
      setTaskCreateCount(taskCreateCount + 1);
      setTaskDescription("");
      toast.success("Tarefa criada com sucesso!")
  }
  return (
      <>
          <Header />
          <Main>
              <NewTask
                  handleAddTask={handleAddTask}
                  taskDescription={taskDescription}
                  setTaskDescription={setTaskDescription}
              />
              <TaskCounter
                  taskCreateCount={taskCreateCount}
                  taskDoneCount={tasks.filter((task) => task.taskDone).length}
                  taskLength={tasks.length}
              />
              {tasks.length > 0 ? (
                  <ul>
                      {tasks.map((task, index) => {
                          return (
                              <TaskList
                                  key={task.task}
                                  task={task.task}
                                  index={index}
                                  taskDone={task.taskDone}
                                  handleTaskChange={handleTaskChange}
                                  handleTaskDelete={handleTaskDelete}
                              />
                          );
                      })}
                  </ul>
              ) : (
                  <NoTasksCreated />
              )}
          </Main>
          <Toaster />
      </>
  );
}

const Main = styled('main')`
  max-width: 736px;
  margin: 0 auto;
`

export default App
