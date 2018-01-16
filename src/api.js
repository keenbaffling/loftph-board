import openSocket from 'socket.io-client';
import axios from 'axios';

const socket = openSocket('http://localhost:8080');

export const news = (data) => {
  socket.on('get started', data => {
    console.log(data);
  });
};
