import axios from "axios";
import {API_URL} from "./constants";

export const api_instance = axios.create ({baseURL : API_URL})
