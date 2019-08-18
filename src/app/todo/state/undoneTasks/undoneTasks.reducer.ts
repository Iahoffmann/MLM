import { createReducer, on } from '@ngrx/store';
import { Task } from '../task';
import { addTask, removeTask, replaceTask } from './undoneTasks.actions';
import { cloneDeep } from 'lodash';

export const initialState: Task[] = [];

export const undoneTasksReducer = createReducer(initialState,
    on(addTask, (state, action) => {
        const newState: Task[] = cloneDeep(state);
        newState.concat(action) ;
        return newState;
    }),
    on(removeTask, (state, action) => {
        const newState: Task[] = cloneDeep(state);
        newState.splice(action.index, 1);
        return newState;
    }),
    on(replaceTask, (state, action) => {
        const newState: Task[] = cloneDeep(state);
        newState[action.index] = action.newTask;
        return newState;
    })
);
