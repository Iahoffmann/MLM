import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTask } from '../../state/undoneTasks/undoneTasks.actions';
import { Task } from '../../state/task';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-adder',
  templateUrl: './task-adder.component.html',
  styleUrls: ['./task-adder.component.sass']
})
export class TaskAdderComponent implements OnInit {

  task = new Task();
  name = new FormControl('', [Validators.required]);
  dueDate = new FormControl('', [Validators.required]);

  constructor(private store: Store<{}>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch(addTask(this.task));
  }

}
