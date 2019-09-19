import axios from "axios";

const options = {
  headers: {
    "Content-Type": "application/json"
  }
};

const api = axios.create(
  { baseURL: "http://cdc-react.herokuapp.com/api" },
  options
);

export default api;
