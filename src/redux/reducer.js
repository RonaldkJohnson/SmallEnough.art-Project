import { COMMENTS } from "../shared/comments";
import { GALLERYS } from "../shared/gallerys";
import { PROMOTIONS } from "../shared/promotions";

export const initialState = {
  comments: COMMENTS,
  gallerys: GALLERYS,
  promotions: PROMOTIONS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
