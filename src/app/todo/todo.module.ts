import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule, } from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';

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
    ReactiveFormsModule,
    StoreModule.forRoot({
      undoneTasks: undoneTasksReducer,
      doneTasks: doneTasksReducer
    }),
    MatToolbarModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    TodoListComponent,
    TodoItemComponent,
    TaskAdderComponent
  ]
})
export class TodoModule { }
