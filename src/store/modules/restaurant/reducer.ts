import { Reducer } from 'redux';
import { IRestaurant } from 'interfaces/restaurant';
// import {
//   AddRestaurantInformationPayload,
//   AddRestaurantInformationType,
// } from './actions';

// interface Action {
//   type: AddRestaurantInformationType;
//   payload: AddRestaurantInformationPayload;
// }

const INITIAL_STATE = {} as IRestaurant;

const restaurant: Reducer<IRestaurant> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_RESTAURANT_INFORMATION': {
      return action.payload.restaurant;
    }
    default: {
      return state;
    }
  }
};
export default restaurant;
