  const logInReducer = (state="", action) => {
  switch(action.type) {

    case 'USER_SIGNIN':
      return action.payload;

    default:
      return state;
  }
}

export default logInReducer ;
