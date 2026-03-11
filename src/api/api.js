import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const sendContact = (form) => {
  return axios.post(`${API_URL}/api/contact/`, form, {
    timeout: 20000,
  });
};