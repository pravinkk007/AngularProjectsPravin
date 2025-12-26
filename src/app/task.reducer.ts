import { Task } from './task.model';
import { addTask, updateTask, deleteTask } from './task.actions';
import { createReducer, on } from '@ngrx/store';
export interface AppState {
  tasks: Task[];
};

export const initialState: AppState = {
  tasks: []
};

export const taskReducer = createReducer(
    initialState,  
    on(addTask, (state, { task }) => ({
      ...state,
      tasks  : [...state.tasks, task]
    })),
  
    on(updateTask, (state, { task }) => ({
      ...state,
      tasks: state.tasks.map(t =>
        t.id === task.id ? task : t
      )
    })),
  
    on(deleteTask, (state, { id }) => ({
      ...state,
      tasks: state.tasks.filter(t => t.id !== id)
    }))
  );
