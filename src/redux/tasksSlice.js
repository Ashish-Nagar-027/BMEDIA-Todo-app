import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    { id: 1, description: 'Task 1', deadline: '2023-06-15T10:00', status: 'pending' },
    { id: 2, description: 'Task 2', deadline: '2023-06-16T12:00', status: 'pending' },
    { id: 3, description: 'Task 3', deadline: '2023-06-17T14:00', status: 'pending' }
  ],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.status = status;
      }
    }
  }
});

export const { addTask, deleteTask, updateTaskStatus } = tasksSlice.actions;
export default tasksSlice.reducer;
