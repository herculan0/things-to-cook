import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true
  }
});

const vm = new Vue();
const baseURL = 'http://a4891ab5559b842568bfd319c19f6e4d-1248026047.us-east-1.elb.amazonaws.com:8080/items/';

const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error');
  });

export const api = {
  getitem: handleError(async id => {
    const res = await axios.get(baseURL + id);
    return res.data;
  }),
  getitems: handleError(async () => {
    const res = await axios.get(baseURL);
    return res.data;
  }),
  deleteitem: handleError(async id => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  }),
  createitem: handleError(async payload => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  }),
  updateitem: handleError(async payload => {
    const res = await axios.put(baseURL + payload._id, payload);
    return res.data;
  })
};
