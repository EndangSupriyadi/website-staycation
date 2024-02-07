// actions/checkout.js
import { CHECKOUT_BOOKING } from "../types";
import axios from "configs/axios";

export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload: payload,
  });
};

export const submitBooking = (payload) => () => {
  return axios.post(`/booking-page`, payload, {
    headers: { "Content-Type": "multipart/form-data" },
  })
  .then(response => {
    return response.data; // Access data from the response
  })
  .catch(error => {
    throw error;
  });
};
