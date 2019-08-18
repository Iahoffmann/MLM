import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { undoneTasksReducer } from './state/undoneTasks/undoneTasks.reducer';
import { doneTasksReducer } from './state/doneTasks/doneTasks.reducer';
import { TaskAdderComponent } from './components/task-adder/task-adder.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    TaskAdderComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      undoneTasks: undoneTasksReducer,
      doneTasks: doneTasksReducer
    })
  ]
})
export class TodoModule { }
