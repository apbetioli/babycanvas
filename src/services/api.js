import axios from 'axios';

var pjson = require('../../package.json');

const api = axios.create({baseURL: pjson.proxy})

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;