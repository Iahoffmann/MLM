import { createSelector, createFeatureSelector } from '@ngrx/store';
import { filter, sortBy } from 'lodash';
import { Task } from '../task';
import { TasksState, taskStateKey } from './tasks.reducer';

export const selectTasks = createFeatureSelector<TasksState, Task[]>(taskStateKey);

export const selectDateOrderedTasks = createSelector(selectTasks, (tasks) => sortBy(tasks, ['dueDate']));

export const selectUndoneTasks = createSelector(selectDateOrderedTasks, (tasks) => filter(tasks, task => !task.done));

export const selectDoneTasks = createSelector(selectDateOrderedTasks, (tasks) => filter(tasks, task => task.done));
