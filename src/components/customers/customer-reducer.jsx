// import CustomerActions from "./components/customers/customer-actions";

const initialState = {
  "customers": [
    {
      "id": 1,
      "firstName": "Ashley",
      "lastName": "Smith"
    },
    {
      "id": 2,
      "firstName": "John",
      "lastName": "Williams"
    },
    {
      "id": 3,
      "firstName": "Juan",
      "lastName": "Lopez"
    },
    {
      "id": 4,
      "firstName": "Jack",
      "lastName": "Testman"
    },
    {
      "id": 5,
      "firstName": "Danny",
      "lastName": "Trejo"
    }
  ]
};

// const action = CustomerActions.Types.age;

export function customerReducer(
  state = initialState,
  action = "age"
) {
  switch (action) {
    // case CustomerActions.Types.age:
    case "age":
      console.log(action);
      return action;

    default:
      console.log("What?");
      return {};
  }
}
