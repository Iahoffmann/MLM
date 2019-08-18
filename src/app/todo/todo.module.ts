import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { StoreModule } from '@ngrx/store';
import { undoneTasksReducer } from './state/undoneTasks/undoneTasks.reducer';
import { doneTasksReducer } from './state/doneTasks/doneTasks.reducer';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent
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
