import axios from "axios";

const API = axios.create({
  baseURL: "https://clinic-website-cms-ovo4.onrender.com/api"
});

export default API;
