import { type Task } from './types';

type ListProp = {
  tasks: Task[];
  toggleTask: ({ id }: { id: string }) => void;
};

function List({ tasks, toggleTask }: ListProp) {
  return (
    <ul className="list">
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <p
              className="task-text"
              style={{
                textDecoration: `${task.isCompleted ? 'line-through' : 'none'}`,
              }}
            >
              {task.description}
            </p>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleTask({ id: task.id })}
            />
          </li>
        );
      })}
    </ul>
  );
}
export default List;
