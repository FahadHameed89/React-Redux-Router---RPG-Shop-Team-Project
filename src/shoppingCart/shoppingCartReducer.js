const ADD = 'shoppingCart/add'

const initialState = [
  { productId: "king-breaker-bow", quantity: 1 }
]

export default (state=initialState, action) => {
  switch(action.type) {
    case ADD:
      return action.payload;

    default:
      return state;
  }
}

// Actions

export const addToCart = (data) => {
  return {
    type: ADD,
    payload: data
  }
}
