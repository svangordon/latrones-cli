import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./constants.js";

const userReducer = (state = {}, { type, payload }) => {
  if (type === USER_LOGGED_IN) {
    return payload
  }
  if (type === USER_LOGGED_OUT) {
    return {}
  }
  return state
}

export default userReducer;
