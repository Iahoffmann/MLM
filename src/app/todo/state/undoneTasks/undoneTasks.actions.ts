import { createAction, props } from '@ngrx/store';
import { Task } from '../task';

export const addTask = createAction('[UndoneTasks] add', props<Task>());
export const removeTask = createAction('[UndoneTasks] remove', props<{id: string}>());
export const replaceTask = createAction('[UndoneTasks] replace', props<{id: string, newTask: Task}>());
