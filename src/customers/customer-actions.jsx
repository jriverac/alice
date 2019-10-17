// types of action
const Types = {
  AGE: "AGE",
  CREATE_ITEM: "CREATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM"
};

// actions
const age = customer => ({
  type: Types.AGE,
  payload: customer
});

export default {
  age,
  Types
};
