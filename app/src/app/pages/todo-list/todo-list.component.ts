import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';
import sweetAlert from 'sweetalert2';
import { Todo } from 'src/app/models/todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];

  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.todoService.getAll().subscribe((x) => (this.todoList = x));
  }

  delete(id: number) {
    sweetAlert
      .fire({
        title: 'Are you sure',
        text: "you won't be able to revert this action",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'yes, delete it',
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.todoService.delete(id).subscribe((x) => {
            if (x) {
              this.load();
            } else {
              alert('bir hata meydana geldi');
            }
          });
        }
      });
  }

  isCompleted(id: number) {
    this.todoService.isCompleted(id).subscribe((x) => {
      console.log(x);

      if (x == true) {
        this.load();
      } else {
        alert('bir hata meydana geldi');
      }
    });
  }
}
