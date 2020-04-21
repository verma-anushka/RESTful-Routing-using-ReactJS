// API setup to backend (https://reqres.in)

import axios from "axios";

export default axios.create({
  baseURL: "https://reqres.in/api/"
});
