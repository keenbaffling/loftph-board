const axios = require('axios');

exports.getNews = cb => {
  axios('/api/v1/news')
    .then(res => res.data)
    .then(data => cb(null, data))
    .catch(err => {
      cb(err);
    });
};

exports.getStatus = cb => {
  axios('/api/v1/status')
    .then(res => res.data)
    .then(data => cb(null, data))
    .catch(err => {
      cb(err);
    });
};

exports.getUsers = cb => {
  axios('/api/v1/users')
    .then(res => res.data)
    .then(data => cb(null, data))
    .catch(err => {
      cb(err);
    });
};
