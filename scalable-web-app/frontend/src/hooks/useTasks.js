import { useState, useEffect } from 'react';
import taskService from '../services/taskService';

export const useTasks = (filters = {}) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await taskService.getTasks(filters);
      setTasks(data.tasks);
    } catch (err) {
      setError(err.message || 'Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [JSON.stringify(filters)]);

  const createTask = async (taskData) => {
    const data = await taskService.createTask(taskData);
    setTasks([data.task, ...tasks]);
    return data;
  };

  const updateTask = async (id, taskData) => {
    const data = await taskService.updateTask(id, taskData);
    setTasks(tasks.map(task => task._id === id ? data.task : task));
    return data;
  };

  const deleteTask = async (id) => {
    await taskService.deleteTask(id);
    setTasks(tasks.filter(task => task._id !== id));
  };

  return {
    tasks,
    loading,
    error,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask
  };
};