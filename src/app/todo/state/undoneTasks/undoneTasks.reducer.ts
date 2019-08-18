import { createReducer, on } from '@ngrx/store';
import { Task } from '../task';
import { addTask, removeTask, replaceTask } from './undoneTasks.actions';

export const initialState: Task[] = [];

export const undoneTasksReducer = createReducer(initialState,
    on(addTask, (state, action) => ({...state, action})),
    on(removeTask, (state, action) => {
        const newState = {...state};
        newState.splice(action.index, 1);
        return newState;
    }),
    on(replaceTask, (state, action) => {
        const newState = {...state};
        newState[action.index] = action.newTask;
        return newState;
    })
);
