// api/index.js

import express from 'express';
import axios from 'axios';

const app = express();

// Vercel needs this export to handle the request as a serverless function
export default async (req, res) => {
  if (req.url.startsWith('/api/quote')) {
    try {
      const response = await axios.get('https://favqs.com/api/qotd', {
        headers: {
          'Authorization': 'Bearer d9efc5c19c4876b2ee43d19af4dd2c46',
        },
      });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching quote', error: error.message });
    }
  } else if (req.url.startsWith('/api/quote/search')) {
    const author = req.query.author;
    try {
      const response = await axios.get(`https://favqs.com/api/quotes/?filter=${author}&type=author`, {
        headers: {
          'Authorization': `Bearer d9efc5c19c4876b2ee43d19af4dd2c46`,
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
