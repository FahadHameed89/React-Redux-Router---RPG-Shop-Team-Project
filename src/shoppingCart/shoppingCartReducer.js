const ADD = 'shoppingCart/add'

const initialState = [
  { productId: "king-breaker-bow", quantity: 8 },
  { productId: "oxhornhelmet", quantity: 5 }
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
