import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TodoModule } from './todo/todo.module';
import { undoneTasksReducer } from './todo/state/undoneTasks/undoneTasks.reducer';
import { doneTasksReducer } from './todo/state/doneTasks/doneTasks.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    TodoModule,
    StoreModule.forRoot({
      undoneTasks: undoneTasksReducer,
      doneTasks: doneTasksReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
