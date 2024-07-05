import axios from "axios";

const BASE_URL = "http://10.0.2.2:5186/api/";

const $host = axios.create({
  baseURL: BASE_URL,
});

export { $host };
