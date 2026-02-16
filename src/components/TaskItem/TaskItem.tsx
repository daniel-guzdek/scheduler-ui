import React from 'react';
import './taskItem.less';
import { Task } from '../../features/tasks/types/task';
import { ActionButton } from '../ActionButton';

interface Props {
  task: Task;
  onRemove: (id: string) => void;
  onUpdateStatus: (id: string, status: Task['status']) => void;
}

const TaskItem: React.FC<Props> = ({ task, onRemove, onUpdateStatus }) => {
  return (
    <div className="container">
      <span className="title">{task.title}</span>
      <div className="actions">
        <ActionButton label="Done" onClick={() => onUpdateStatus(task.id, 'done')} />
        <ActionButton label="Defer" onClick={() => onUpdateStatus(task.id, 'deferred')} />
        <ActionButton label="Remove" onClick={() => onRemove(task.id)} />
      </div>
    </div>
  );
};

export default TaskItem;
