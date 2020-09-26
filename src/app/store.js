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

  const fetchClans = fetch('/data/clans.json')
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

  const mapClans = (dataset) => {
    return dataset.map((clan) => {
        // For each clan in the dataset
        // dasherize the clan name and add it as
        // the ID
        clan.clanId = dasherize(clan.clan);
        return clan;
      },
    );
  }

  return Promise
    .all([fetchEquipment, fetchUtilities, fetchClans])
    .then(rawData => {
      let products = {};
      let clans = [];

      products = mapProducts(products, rawData[0]);
      products = mapProducts(products, rawData[1]);
      clans = mapClans(rawData[2]);

      return {
        clans: clans,
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
