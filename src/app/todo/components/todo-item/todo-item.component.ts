import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../state/task';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {
  @Input() task: Task;

  constructor() { }

  ngOnInit() {
  }

}
