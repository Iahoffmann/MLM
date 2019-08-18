import { createAction, props } from '@ngrx/store';
import { Task } from '../task';

export const addTask = createAction('[DoneTasks] add', props<Task>());
export const removeTask = createAction('[DoneTasks] remove', props<{index: number}>());
