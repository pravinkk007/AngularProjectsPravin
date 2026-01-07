import { Injectable } from '@angular/core';
import { Action, State, StateContext } from "@ngxs/store";
import { TodoStateModel } from "../todo-state-model";
import { TodoModel } from "../todo-model";

import { AddTodo } from "../state-actions";
@State<TodoStateModel>({
  name:"todo",
  defaults:{
    items:[]
  }
})
@Injectable()//{
 // providedIn: 'root'
//})
export class StatesService {
  constructor() { }
 @Action(AddTodo)
  addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
    const state = ctx.getState();

    const newItem: TodoModel = {
      id: Math.floor(Math.random() * 1000),
      title: action.title,
      isActive: true,
    };

    ctx.setState({
      ...state,
      items: [...state.items, newItem],
    });
  }

}
