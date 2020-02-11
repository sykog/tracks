import axios from 'axios';
import {AsyncStorage} from "react-native";

const instance = axios.create({
  baseURL: 'http://4876fdb7.ngrok.io'
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  }, error => Promise.reject(error)
);

export default instance;