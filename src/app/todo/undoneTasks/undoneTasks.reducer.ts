import { createReducer, on } from '@ngrx/store';
import { Task } from '../task';

export const initialState: Task[] = [];

export const undoneTasksReducer = createReducer(initialState
);
