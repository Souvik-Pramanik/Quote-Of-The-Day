// api/index.js

import express from 'express';
import axios from 'axios';

const app = express();

// Vercel needs this export to handle the request as a serverless function
export default async (req, res) => {
  if (req.url.startsWith('/api/quote')) {
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
        headers: {
          'Authorization': 'Bearer 9PddOT4PStFjpSRO23SxFg==8gnX7hMQ0YaH7hkI',
        },
      });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching quote', error: error.message });
    }
  } else if (req.url.startsWith('/api/quote/search')) {
    const author = req.query.author;
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/quotes/?filter=${author}&type=author`, {
        headers: {
          'Authorization': `Bearer 9PddOT4PStFjpSRO23SxFg==8gnX7hMQ0YaH7hkI`,
        },
      });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching quotes', error: error.message });
    }
  } else {
    res.status(404).json({ message: 'Route not found' });
  }
};
