import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Task } from '../../state/task';
import { TasksState } from '../../state/tasks/tasks.reducer';
import { replaceTask } from '../../state/tasks/tasks.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {
  @Input() task: Task = new Task();

  doneControl = new FormControl(this.task.done, []);
  minDate = new Date();

  taskDetailsControls = new FormGroup({
    name: new FormControl('', [Validators.required]),
    dueDate: new FormControl('', [])
  });

  get nameControl() {
    return this.taskDetailsControls.controls.name;
  }

  get dueDateControl() {
    return this.taskDetailsControls.controls.dueDate;
  }

  constructor(private store: Store<TasksState>) { }

  ngOnInit() {
    this.nameControl.setValue(this.task.name);
    this.dueDateControl.setValue(this.task.dueDate);

    if (this.task.done) {
      this.nameControl.disable();
      this.dueDateControl.disable();
    }

    this.dueDateControl.valueChanges.subscribe(() => {
      this.detailChange();
    });
  }

  toggleDone() {
    const newTask = new Task(this.task);
    newTask.done = !this.task.done;
    this.store.dispatch(replaceTask(newTask));
  }

  detailChange() {
    const newTask = new Task({
      id: this.task.id,
      done: this.task.done,
      name: this.nameControl.value as string,
      dueDate: this.dueDateControl.value === '' ? null : this.dueDateControl.value
    });
    this.store.dispatch(replaceTask(newTask));
  }

}
