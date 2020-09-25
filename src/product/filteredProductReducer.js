const FILTER_WARRIOR = 'filtered-products/warrior'
const FILTER_MAGE = 'filtered-products/mage'
const FILTER_ROGUE = 'filtered-products/rogue'

const initialState = {
  filter: 'warrior',
  sortby: 'rarity',
  products: [],
}

const roleFilter = (role) =>  {
  return x => { return x.role === role || x.role === 'any' }
}

export default (state=initialState, action) => {
  switch(action.type) {
    case FILTER_WARRIOR:
      return {...state, filter: "warrior", products: action.payload.filter(roleFilter("warrior"))};

    case FILTER_MAGE:
      return {...state, filter: "mage", products: action.payload.filter(roleFilter("mage"))};

    case FILTER_ROGUE:
      return {...state, filter: "rogue", products: action.payload.filter(roleFilter("rogue"))};

    default:
      return state;
  }
}

// Action
export const filterByRole = (role, products) => {
  let type = '';
  switch(role) {
    case 'warrior':
      type = FILTER_WARRIOR;
      break;
    case 'mage':
      type = FILTER_MAGE;
      break;
    case 'rogue':
      type = FILTER_ROGUE;
      break;
    default:
      type = '';
  }

  return {
    type: type,
    payload: products
  }
}
