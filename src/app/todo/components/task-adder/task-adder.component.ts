import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTask } from '../../state/tasks/tasks.actions';
import { Task } from '../../state/task';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { TasksState } from '../../state/tasks/tasks.reducer';

@Component({
  selector: 'app-task-adder',
  templateUrl: './task-adder.component.html',
  styleUrls: ['./task-adder.component.sass']
})
export class TaskAdderComponent {
  taskInputs = new FormGroup({
    name: new FormControl('', [Validators.required]),
    dueDate: new FormControl('', [])
  });

  get nameControl() {
    return this.taskInputs.controls.name;
  }

  get dueDateControl() {
    return this.taskInputs.controls.dueDate;
  }

  minDate = new Date();

  constructor(private store: Store<TasksState>) { }

  onSubmit() {
    const task = new Task({
      name: this.nameControl.value as string,
      dueDate: this.dueDateControl.value === '' ? null : this.dueDateControl.value
    });
    this.store.dispatch(addTask(task));

    this.taskInputs.reset();
    this.taskInputs.updateValueAndValidity();
  }
}
