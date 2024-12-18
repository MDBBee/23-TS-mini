import { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';
import { type Task } from './types';

function loadTasks(): Task[] {
  const data = localStorage.getItem('tasks');
  if (data) {
    return JSON.parse(data);
  }
  return [];
}

function updateStorage(tasks: Task[]): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function Component() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks());

  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);
  };

  const toggleTask = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === id) {
          t.isCompleted = !t.isCompleted;
        }
        return t;
      })
    );
  };
  useEffect(() => {
    updateStorage(tasks);
  }, [tasks]);

  return (
    <section>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </section>
  );
}
export default Component;
