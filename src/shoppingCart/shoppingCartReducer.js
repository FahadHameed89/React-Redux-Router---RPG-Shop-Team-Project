//https://www.thetopsites.net/article/53766463.shtml

function AddOrMergeCartItem(state, item) {
  const oldItemIndex = state.findIndex(x => x.id === item.id);
  const oldItem = state[oldItemIndex];

  let newState;
  if(oldItemIndex !== -1) {
    newState = [
      ...state.slice(0, oldItemIndex),
      {...item, quantity: oldItem.quantity + item.quantity},
      ...state.slice(oldItemIndex+1),
    ]
  } else {
    newState = [...state, item];
  }
  return newState;
}


export default (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return AddOrMergeCartItem(state, action.payload);

    case "REMOVE_All":
      if(action.payload) {
        const updatedCart = state.filter(
          (item) => item.id !== action.payload
        );
        return updatedCart;
      }else {
        return [];
      }


    case "REMOVE_ONE":
      const removeOneItem = state.map((cartItem)=>{
        if((cartItem.id === action.payload)&&(cartItem.quantity>0) ){
            cartItem.quantity -- ;
        }
        return cartItem;
     });
      return removeOneItem;

      case "ADD_ONE":
        const addOneItem = state.map((cartItem)=>{
          if(cartItem.id === action.payload ){
              cartItem.quantity ++;
          }
          return cartItem;
       });
        return addOneItem;


    default:
      return state;
  }
};

//actions

export const addToCart = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};

export const removeAll = (id) => {
  return {
    type: "REMOVE_All",
    payload: id,
  };
};

export const removeOne = (id) => {
  return {
    type: "REMOVE_ONE",
    payload: id,
  };
};

export const addOne = (id) => {
  return {
    type: "ADD_ONE",
    payload: id,
  };
};
