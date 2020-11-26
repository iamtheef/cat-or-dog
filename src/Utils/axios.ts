import axios from "axios";

let isProduction = process.env.REACT_APP_ENV?.toString() === "production";

export const client = axios.create({
  baseURL: isProduction
    ? process.env.REACT_APP_api
    : process.env.REACT_APP_local,
  timeout: 30000,
  headers: { "X-Custom-Header": "foobar", "Content-Type": "application/json" },
});
