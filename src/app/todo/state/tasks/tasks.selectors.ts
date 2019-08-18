import { TasksState } from './tasks.reducer';
import { createSelector } from '@ngrx/store';
import { filter } from 'lodash';

export const selectTasks = (state: TasksState) => state.tasks;

export const selectUndoneTasks = createSelector(selectTasks, (tasks) => filter(tasks, task => !task.done));

export const selectDoneTasks = createSelector(selectTasks, (tasks) => filter(tasks, task => task.done));
