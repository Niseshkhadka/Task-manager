import  { useState } from "react";
import { Card } from "./components/ui/card";
import Taskinput from "./components/Taskinput";
import type { Task } from "./types/tasks";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTask] = useState<Task[]>([]);
  const addTask = (title: string) => {
    setTask((prev) => [...prev, { id: Date.now(), title, completed: false }]);
  };
  const toggleTask = (id: number) => {
    setTask((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
  const deleteTask = (id: number) => {
    setTask((prev) => 
    prev.filter ((task) => task.id != id));
  };
  return (
    <div className="max-w-xl mx-auto mt-14">
      <Card className="p-6 shadow-mid">
        <h1 className="text-xl font-semibold mb-4">Task manager</h1>
        <Taskinput onAdd={addTask} />
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        <p>Completed</p>
      </Card>
    </div>
  );
}
export default App;
