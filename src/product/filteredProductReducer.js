const FILTER_WARRIOR = 'filtered-products/warrior'
const FILTER_MAGE = 'filtered-products/mage'
const FILTER_ROGUE = 'filtered-products/rogue'
const FILTER_TRINKETS = 'filtered-products/trinkets'
const FILTER_POTIONS = 'filtered-products/potions'

const initialState = {
  filter: 'warrior',
  sortby: 'rarity',
  products: [],
}

const roleFilter = (role) =>  {
  return x => { return x.role === role }
}

const potionFilter = x => x.category === 'consumable';

const trinketFilter = x => x.category === 'artifact';

export default (state=initialState, action) => {
  switch(action.type) {
    case FILTER_WARRIOR:
      return {...state, filter: "warrior", products: action.payload.filter(roleFilter("warrior"))};

    case FILTER_MAGE:
      return {...state, filter: "mage", products: action.payload.filter(roleFilter("mage"))};

    case FILTER_ROGUE:
      return {...state, filter: "rogue", products: action.payload.filter(roleFilter("rogue"))};

    case FILTER_POTIONS:
      return {...state, filter: "potions", products: action.payload.filter(potionFilter)};

    case FILTER_TRINKETS:
      return {...state, filter: "trinkets", products: action.payload.filter(trinketFilter)};

    default:
      return state;
  }
}

// Action
export const filterBy = (filter, products) => {
  let type = '';
  switch(filter) {
    case 'warrior':
      type = FILTER_WARRIOR;
      break;
    case 'mage':
      type = FILTER_MAGE;
      break;
    case 'rogue':
      type = FILTER_ROGUE;
      break;
    case 'potions':
      type = FILTER_POTIONS;
      break;
    case 'trinkets':
      type = FILTER_TRINKETS;
      break;
    default:
      type = '';
  }

  return {
    type: type,
    payload: products
  }
}
