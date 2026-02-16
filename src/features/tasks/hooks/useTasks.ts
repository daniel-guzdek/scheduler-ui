import { useState } from 'react';
import { Task } from '../types/task';
import { generateId } from '../utils/generateId';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask = {
      id: generateId(),
      title,
      status: 'todo' as const,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateStatus = (id: string, status: Task['status']) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status } : task)));
  };

  return { tasks, addTask, removeTask, updateStatus };
};
