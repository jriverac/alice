import { CreateTodoAction, MarkTodoDoneAction } from "./todo.actions";

export class AboutReducer {
  markDone(state: Todo[], action: MarkTodoDoneAction): Todo[] {
    return state.map(todo => {
      return todo.id === action.payload ? { ...todo, done: true } : todo;
    });
  }
}

const state = []; // initial state
export const todos = createReducer(TodoReducer)(state);
