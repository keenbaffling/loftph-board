const express = require('express');
const router = express.Router();

router.get('/news', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Loft Internal Dry Run',
      date: '2017-12-12T00:00:00.000Z',
      location: 'Loft Penthouse'
    },
    {
      id: 2,
      title: 'Loft Customer Dry Run',
      date: '2017-12-13T00:00:00.000Z',
      location: 'Loft Penthouse'
    },
    {
      id: 3,
      title: 'Loft  Run',
      date: '2017-12-13T00:00:00.000Z',
      location: 'Loft Penthouse'
    }
  ]);
});

router.get('/status', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Hot Desks',
      total: '50',
      occupied: '8'
    },
    {
      id: 2,
      title: 'Conference Rooms',
      total: '4',
      occupied: '2'
    }
  ]);
});

router.get('/users', (req, res) => {
  res.json([
    'https://graph.facebook.com/10214773973964090/picture?type=large',
    'https://loft.ph/uploads/avatars/051ea198-df34-4171-a109-3b2bfd38a19e.jpeg',
    'https://graph.facebook.com/10155013529779147/picture?type=large',
    'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg',
    'https://loft.ph/uploads/avatars/f617a601-3d45-412c-a8e3-8fafb06a4eda.jpeg'
  ]);
});

module.exports = router;
