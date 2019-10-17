import CustomerActions from "./customer-actions";

// const defaultState = {
//   customer: {}
// };

// const action = CustomerActions.Types.age;

export function customerReducer(
  state = {},
  action = CustomerActions.Types.age
) {
  switch (action) {
    case CustomerActions.Types.age:
      console.log(action);
      return action;

    default:
      console.log("What?");
      return action;
  }
}
