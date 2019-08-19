import { createSelector, createFeatureSelector } from '@ngrx/store';
import { filter } from 'lodash';
import { Task } from '../task';
import { TasksState, taskStateKey } from './tasks.reducer';

export const selectTasks = createFeatureSelector<TasksState, Task[]>(taskStateKey);

export const selectUndoneTasks = createSelector(selectTasks, (tasks) => filter(tasks, task => !task.done));

export const selectDoneTasks = createSelector(selectTasks, (tasks) => filter(tasks, task => task.done));
