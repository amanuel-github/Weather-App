import axios from "axios";
import { api_key, api_url } from "./config";

const getWeatherData = (coord) => {
  return axios.get(
    api_url + `?lat=${coord.lat}&lon=${coord.lon}&appid=${api_key}`
  );
};

export default getWeatherData;
