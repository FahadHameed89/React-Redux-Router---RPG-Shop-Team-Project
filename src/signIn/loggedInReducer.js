const initialState = { clan: "the-absolute-zeros", member: 'Irwin', funds: 5000 }
  
const logInReducer = (state=initialState, action) => {
  switch(action.type) {

    case 'USER_SIGNIN':
      return action.payload;

    default:
      return state;
  }
}

export default logInReducer ;
