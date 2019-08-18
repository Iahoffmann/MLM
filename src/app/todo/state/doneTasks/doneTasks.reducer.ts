import { createReducer, on } from '@ngrx/store';
import { Task } from '../task';
import { addTask, removeTask } from './doneTasks.actions';
import { cloneDeep } from 'lodash';

export const initialState: Task[] = [];

export const doneTasksReducer = createReducer(initialState,
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
);
