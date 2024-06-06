 import axios from "axios";

 export const api = axios.create({
    baseURL: "https://food-explorer-api-nlnb.onrender.com",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    }

 });


 