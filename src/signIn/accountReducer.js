const SIGN_IN = "account/sign-in";
const SIGN_OUT = "account/sign-out";
const DEDUCT_FUNDS = "account/deduct-funds";

/**
 * Account Reducer
 */
export default (state={}, action) => {
  switch(action.type) {

    case SIGN_IN:
      return action.payload;

    case SIGN_OUT:
      return {};

    case DEDUCT_FUNDS:
      return {...state, funds: state.funds - action.payload};

    default:
      return state;
  }
}

/**
 * Signs in the account with the given account object
 *
 * @param {object} account - User account that is to be signed in
 * @param {string} account.clanId - Dasherized identifier of the signed in clan
 * @param {string} account.memberName - Name of the signed in member
 * @param {number} account.funds - Amount of funds available to the clan
 * @param {string} account.profileImg - Name of the members profile image.
 */
export const signIn = (account) => {
  return {
    type: SIGN_IN,
    payload: account
  };
}

/**
 * Signs out the current user causing the signin page to load
 * and be required.
 */
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
}

/**
 * Removes funds out of a members account.
 * @param {number} amount - Amount of money to deduct
 */
export const deductFunds = (amount) => {
  return {
    type: DEDUCT_FUNDS,
    payload: amount
  };
}
