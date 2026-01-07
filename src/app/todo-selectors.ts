import { Selector } from "@ngxs/store";
import { TodoStateModel } from "./todo-state-model";
import { StatesService } from "./services/states.service";
export class TodoSelectors {
@Selector([StatesService])
  static items(state: TodoStateModel) {
    return state.items;
  }

  @Selector([StatesService])
  static doneItems(state: TodoStateModel) {
    return state.items.filter((it) => !it.isActive);
  }

  @Selector([StatesService])
  static activeItems(state: TodoStateModel) {
    return state.items.filter((it) => it.isActive);
  }
}
