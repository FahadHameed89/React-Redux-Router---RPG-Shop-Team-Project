// const ADD = 'shoppingCart/add';
// let REMOVE_All = "";



export default (state=[], action) => {
  switch(action.type) {
    case 'ADD':
      return action.payload;
    case 'REMOVE_All':
    //  return state.filter((item) => item.id !== action.id);

      const updatedToDoList = state.filter( (item)  => item.id !== action.payload
    );
   
    return updatedToDoList;

    default:
      return state;
  }
}



//actions

  
export const addToCart = data => {
  return {
    type: 'ADD',
    payload: data
  };
}

 export const removeAll = id => {
  return {
    type: 'REMOVE_All',
    payload: id
  };
}

