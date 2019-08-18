import { createReducer, on } from '@ngrx/store';
import { Task } from '../task';
import { addTask, removeTask, replaceTask } from './tasks.actions';
import { cloneDeep, findIndex } from 'lodash';

export interface TasksState {
    tasks: Task[];
}

export const initialState: TasksState = {
    tasks: []
};

export const tasksReducer = createReducer(initialState,
    on(addTask, (state, action) => {
        const newState = cloneDeep(state);
        newState.tasks.concat(action) ;
        return newState;
    }),
    on(removeTask, (state, action) => {
        const newState = cloneDeep(state);
        const index = findIndex(newState.tasks, x => x.id === action.id);
        newState.tasks.splice(index, 1);
        return newState;
    }),
    on(replaceTask, (state, action) => {
        const newState = cloneDeep(state);
        const index = findIndex(newState.tasks, x => x.id === action.id);
        newState.tasks[index] = action.newTask;
        return newState;
    })
);
