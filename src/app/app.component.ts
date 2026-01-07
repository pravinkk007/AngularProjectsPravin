import { Component,OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { AddTodo } from "./state-actions";
import { TodoSelectors } from "./todo-selectors";
import { TodoModel } from "./todo-model";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  title = 'NGXSDemoVersion2-app';
  //@Select(TodoSelectors.items)
  items$ !: Observable<TodoModel[]>;

 // @Select(TodoSelectors.activeItems)
  activeItems$!: Observable<TodoModel[]>;

 // @Select(TodoSelectors.doneItems)
  doneItems$!: Observable<TodoModel[]>;

    newTitle: string;
    constructor(private store: Store) {
      this.newTitle = "";
    //  this.items$ = this.store.select(TodoSelectors.items);
    //  this.activeItems$ = this.store.select(TodoSelectors.activeItems);
     // this.doneItems$ = this.store.select(TodoSelectors.doneItems);
    }
   // items$=this.store.select(TodoSelectors.items);
    add() {
    this.store.dispatch(new AddTodo(this.newTitle));
    this.newTitle = "";
  }
  ngOnInit() {
    this.items$ = this.store.select(TodoSelectors.items);
    this.activeItems$ = this.store.select(TodoSelectors.activeItems);
      this.doneItems$ = this.store.select(TodoSelectors.doneItems);
  }
}

