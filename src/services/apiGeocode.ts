import axios from 'axios';

const apiGeocode = axios.create({
  baseURL: `https://maps.googleapis.com/maps/api/geocode/json?address=Rua%20ademar%20vincente%20ferreira,%20100&key=AIzaSyC0qnQyANXBJhyPHYCKKcOqwvOv0CJz10Q`,
  responseType: "json",
});

export default apiGeocode;
