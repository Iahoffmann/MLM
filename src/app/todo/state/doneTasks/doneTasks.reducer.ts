import { createReducer, on } from '@ngrx/store';
import { Task } from '../task';
import { addTask, removeTask } from './doneTasks.actions';

export const initialState: Task[] = [];

export const doneTasksReducer = createReducer(initialState,
    on(addTask, (state, action) => ({...state, action})),
    on(removeTask, (state, action) => {
        const newState = {...state};
        newState.splice(action.index, 1);
        return newState;
    }),
);
