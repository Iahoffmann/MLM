import { createReducer, on } from '@ngrx/store';
import { Task } from '../task';
import { addTask, removeTask, replaceTask } from './tasks.actions';
import { cloneDeep, findIndex } from 'lodash';

export interface TasksState {
    tasks: Task[];
}

export const taskStateKey = 'tasks';
export const initialState: Task[] = [];

export const tasksReducer = createReducer(initialState,
    on(addTask, (state, action) => {
        const newTask = new Task(action);
        const newState = cloneDeep(state);
        newState.push(newTask);
        return newState;
    }),
    on(removeTask, (state, action) => {
        const newState = cloneDeep(state);
        const index = findIndex(newState, x => x.id === action.id);
        newState.splice(index, 1);
        return newState;
    }),
    on(replaceTask, (state, action) => {
        const newState = cloneDeep(state);
        const index = findIndex(newState, x => x.id === action.id);
        newState[index] = action.newTask;
        return newState;
    })
);
