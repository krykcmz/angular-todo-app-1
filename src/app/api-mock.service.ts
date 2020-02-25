import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiMockService {

  constructor(
  ) {
  }

  public getAllTodos(): Observable<Todo[]> {
    return Observable.of([
      new Todo({id: 1, title: 'todo 1', complete: false})
    ]);
  }

  public createTodo(todo: Todo): Observable<Todo> {
    todo.id = Math.floor((Math.random() * 10000000) + 2);
    return Observable.of(
      todo
    );
  }

  public getTodoById(todoId: number): Observable<Todo> {
    return Observable.of(
      new Todo({id: 1, title: 'Read article', complete: false})
    );
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return Observable.of(
      new Todo({id: 1, title: 'Read article', complete: false})
    );
  }

  public deleteTodoById(todoId: number): Observable<any> {
    return Observable.of(
      new Todo({id: 1, title: 'Read article', complete: false})
    );
  }
}
