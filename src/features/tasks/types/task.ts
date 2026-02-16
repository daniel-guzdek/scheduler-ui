export type TaskStatus = 'todo' | 'done' | 'deferred';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}
