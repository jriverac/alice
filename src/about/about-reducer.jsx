import { AgeAction, DeageAction } from "./about-actions";
const type = {
  AGE: "AGE"
};

const payload = {
  payload: "23"
};

export function aboutReducer({ type, payload }) {
  switch (type) {
    case AGE:
      new AgeAction();
    case DEAGE:
  }
}
