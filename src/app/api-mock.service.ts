import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiMockService {

  todos: Todo[] = [new Todo({id: 1, title: 'todo 1'})];

  constructor(
  ) {
  }

  public getAllTodos(): Observable<Todo[]> {
    return Observable.of(
      this.todos
    );
  }

  public createTodo(todo: Todo): Observable<Todo[]> {
    todo.id = Math.floor((Math.random() * 10000000) + 2);
    this.todos = this.todos.concat(todo);
    return Observable.of(
      this.todos
    );
  }

  public getTodoById(todoId: number): Observable<Todo> {
    return Observable.of(
      new Todo({id: 1, title: 'Read article', complete: false})
    );
  }

  public updateTodo(todo: Todo): Observable<Todo[]> {
    this.todos.forEach((t, index) => {
      if (t.id === todo.id) {
        this.todos[index] = todo;
      }
    });
    return Observable.of(
      this.todos
    );
  }

  public deleteTodoById(todoId: number): Observable<Todo[]> {
    this.todos = this.todos.filter((t) => t.id !== todoId);
    return Observable.of(
      this.todos
    );
  }
}
