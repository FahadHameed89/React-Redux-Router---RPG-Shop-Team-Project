const LOAD = 'products/load'

export default (state={}, action) => {
  switch(action.type) {
    case LOAD:
      return action.payload;
  }
}

// Action
export const loadProducts = (data) => {
  const mappedData =
    data.reduce((state, current) => {
      return state[current.name] = current;
    }, {});

  return {
    type: LOAD,
    payload: mappedData
  }
}

export const getAllProducts = () => {
  return dispatch => {
    fetch('../../data/equipment.json')
      .then(res => res.text())
      .then(res => JSON.parse(res))
      .then(state => dispatch(loadProducts(state)))
  }
}
