const axios = require('axios');

exports.getNews = cb => {
  axios('https://loft.ph/api/announcements')
    .then(res => res.data)
    .then(data => cb(null, data))
    .catch(err => {
      cb(err);
    });
};

exports.getStatus = cb => {
  axios('https://loft.ph/api/availabilityv2')
    .then(res => res.data)
    .then(data => cb(null, data))
    .catch(err => {
      cb(err);
    });
};

exports.getUsers = cb => {
  axios('https://loft.ph/api/profile-imagesv2')
    .then(res => res.data)
    .then(data => cb(null, data))
    .catch(err => {
      cb(err);
    });
};
