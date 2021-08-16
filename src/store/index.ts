import { createStore } from 'redux';

import { IRestaurant } from 'interfaces/restaurant';
import rootReducer from './modules/rootReducer';

export interface IState {
  restaurant: IRestaurant;
}

const store = createStore(rootReducer);

export { store };
