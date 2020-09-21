import axios from 'axios';

const axiosOrders = axios.create({
  baseURL: 'https://burger-project-js-7.firebaseio.com/'
});

export default axiosOrders;