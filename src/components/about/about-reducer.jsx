import AboutActions from "./about-actions";

// var defaultState = {
//   customer: { firstName: "" }
// };

export function aboutReducer(state = {}, action = AboutActions.Types.age) {
  switch (action) {
    case AboutActions.Types.age:
      console.log(action);
      return action;
    default:
      console.log("What??");
      return "hello";
  }
}
