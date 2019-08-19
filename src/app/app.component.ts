import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TasksState } from './todo/state/tasks/tasks.reducer';
import { selectUndoneTasks, selectDoneTasks } from './todo/state/tasks/Tasks.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  get undoneTasks$() {
    return this.store.select(selectUndoneTasks);
  }

  get doneTasks$() {
    return this.store.select(selectDoneTasks);
  }

  constructor(private store: Store<TasksState>) {}
}
