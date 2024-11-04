import axios from "axios";

export const authAxios = axios.create({
  withCredentials: true
});

export const authAxiosWithAnyURL = axios.create({
  withCredentials: false
});
