 import axios from "axios";

 export const api = axios.create({
      baseURL: "https://food-explorer-api-1-7b81.onrender.com",
      // baseURL: "http://localhost:3333",
      withCredentials: true,
 });