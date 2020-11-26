import axios from "axios";

let isProduction = process.env.NODE_ENV?.toString() === "production";

export const client = axios.create({
  baseURL: isProduction ? "http://18.158.52.156:4000" : "http://localhost:4000",
  timeout: 30000,
  headers: { "X-Custom-Header": "foobar", "Content-Type": "application/json" },
});
