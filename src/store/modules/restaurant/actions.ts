import { IRestaurant } from 'interfaces/restaurant';

export type AddRestaurantInformationType = 'ADD_RESTAURANT_INFORMATION';

export interface AddRestaurantInformationPayload {
  restaurant: IRestaurant;
}

interface AddRestaurantInformationReturn {
  type: AddRestaurantInformationType;
  payload: AddRestaurantInformationPayload;
}

export function addRestaurantInformation(
  restaurant: IRestaurant,
): AddRestaurantInformationReturn {
  return {
    type: 'ADD_RESTAURANT_INFORMATION',
    payload: {
      restaurant,
    },
  };
}
