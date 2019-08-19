import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../state/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  @Input() tasks: Task[];
  @Input() title = '';

  constructor() { }

  ngOnInit() {
  }

}
