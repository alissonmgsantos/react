import axios from "axios";

const api = axios.create({baseURL: 'http://cdc-react.herokuapp.com/api'});

  export default api;