import { createAction, props } from '@ngrx/store';
import { Task } from '../task';

export const addTask = createAction('[UndoneTasks] add', props<Task>());
export const removeTask = createAction('[UndoneTasks] remove', props<{index: number}>());
export const replaceTask = createAction('[UndoneTasks] replace', props<{index: number, newTask: Task}>());
