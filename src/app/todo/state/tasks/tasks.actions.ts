import { createAction, props } from '@ngrx/store';
import { Task } from '../task';

export const addTask = createAction('[Tasks] add', props<Task>());
export const removeTask = createAction('[Tasks] remove', props<{id: string}>());
export const replaceTask = createAction('[Tasks] replace', props<{id: string, newTask: Task}>());
