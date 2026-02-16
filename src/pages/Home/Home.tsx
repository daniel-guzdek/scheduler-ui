import React, { useState } from 'react';
import { useTasks } from '../../features/tasks/hooks/useTasks';
import { ActionButton } from '../../components/ActionButton';
import './home.less';

const Home: React.FC = () => {
  const { tasks, addTask, removeTask, updateStatus } = useTasks();
  const [input, setInput] = useState('');

  return (
    <div className="container">
      <h1 className="heading">Scheduler</h1>

      <div className="inputGroup">
        <input
          className={input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type..."
        />
        <ActionButton
          label="Add new"
          onClick={() => {
            addTask(input);
            setInput('');
          }}
        />
      </div>

      <ul className="taskList">
        {tasks.map((task) => (
          <li key={task.id} className="taskItem">
            <span className="taskText">
              {task.title} <span className="status">[{task.status}]</span>
            </span>
            <div className="actions">
              <ActionButton label="OK" onClick={() => updateStatus(task.id, 'done')} />
              <ActionButton label="Awaiting" onClick={() => updateStatus(task.id, 'deferred')} />
              <ActionButton label="X" onClick={() => removeTask(task.id)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
