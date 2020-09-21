import { createStore } from 'redux';
import rootReducer from './reducers';
import dasherize from '../common/dasherize';

export default () => {
  const fetchEquipment = fetch('/data/equipment.json')
                          .then(res => res.text())
                          .then(res => JSON.parse(res));

  const fetchUtilities = fetch('/data/utilities.json')
                          .then(res => res.text())
                          .then(res => JSON.parse(res));

  const fetchSignin = fetch('/data/signin.json')
                        .then(res => res.text())
                        .then(res => JSON.parse(res));


  const mapProducts = (products, dataset) => {
    return dataset.reduce(
      (state, current) => {
        // For each product in the dataset
        // dasherize the product name
        const productId = dasherize(current.name);

        // then assign that dasherized name to the
        // products id & as the key in the products redux
        // store.
        current.id = productId;
        state[productId] = current;

        return state;
      },
      products);
  }

  const mapSignin = (signin, dataset) => {
    return dataset.reduce(
      (state, current) => {
        // For each clan in the dataset
        // dasherize the clan name
        const clanId = dasherize(current.clan);

        // then assign that dasherized name to the
        // clan object in the redux store.
        state[clanId] = current;
        return state;
      },
      signin
    );
  }

  return Promise
    .all([fetchEquipment, fetchUtilities, fetchSignin])
    .then(rawData => {
      let products = {};
      let signIn = {};

      products = mapProducts(products, rawData[0]);
      products = mapProducts(products, rawData[1]);
      signIn = mapSignin(signIn, rawData[2]);

      return {
        clans: signIn,
        products: products
      }
    })
    .then(preloadedState => {
      return createStore(
        rootReducer,
        preloadedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    })

}
