import axios from 'axios';

const apiGeocode = axios.create({
  baseURL: `https://maps.googleapis.com/maps/api/geocode/`,
  responseType: "json",
});

export default apiGeocode;
