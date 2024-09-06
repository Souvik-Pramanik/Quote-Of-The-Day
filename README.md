
# 🌟 Quote Of The Day 🌟

![Demo](https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif)

Welcome to **Quote Of The Day**, a dynamic web application that brings daily inspiration to your fingertips. Whether you need a motivational boost or want to explore insightful quotes by your favorite authors, our platform is built for you. This project combines modern web design and functionality using cutting-edge technologies to deliver random quotes or author-specific quotes, with a responsive, user-friendly interface.

🔗 **[Live Demo](https://your-vercel-url.vercel.app)** 

---

## 📝 Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Why This Project?](#why-this-project)
- [Project Structure](#project-structure)
- [Manifest & PWA](#manifest--pwa)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Features

- **Random Quotes:** Get a random quote at the click of a button.
- **Search by Author:** Find quotes by your favorite authors using the search bar.
- **Dynamic Background Colors:** Each quote is displayed with a randomly generated background color inside a visually appealing SVG frame.
- **Responsive Design:** Enjoy the application on any device — mobile, tablet, or desktop.
- **PWA Support:** Download the app and access quotes offline.
  
---

## 💻 Technologies

- **Frontend:** HTML5, CSS3, Bootstrap, JavaScript
- **Backend:** Node.js, Express.js
- **API:** FavQs API (https://favqs.com/)
- **Hosting:** Vercel (https://vercel.com/)
- **PWA Features:** Service Workers, Web Manifest

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/quote-of-the-day.git
cd quote-of-the-day
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run Locally

```bash
npm start
```

The application should now be running on `http://localhost:4000`.

### Step 4: Deploy to Vercel

1. Push the repository to GitHub.
2. Connect your GitHub repo with Vercel.
3. Deploy using Vercel's one-click deployment.

---

## 🛠 Usage

1. **Generate Random Quotes:** Click the "Get Random Quote" button to fetch a random quote from the FavQs API.
2. **Search by Author:** Use the search bar to find quotes by entering an author’s name. Click "Search Quote" to retrieve the quotes.
3. **Download as Web App:** The app is a Progressive Web App (PWA), meaning you can add it to your home screen and use it offline.

---

## 💡 Why This Project?

1. **Inspiration on Demand:** Whether you're having a bad day or need a quick motivational boost, a simple click can brighten your mood.
2. **Learn From the Best:** You can search quotes by famous authors and thinkers, providing educational value and personal growth.
3. **Mindfulness:** Regular exposure to positive and thought-provoking content helps promote mindfulness, reflection, and a healthy mindset.
4. **PWA Flexibility:** Allows users to access the application offline, making it a valuable tool for moments when internet connectivity is limited.

---

## 📂 Project Structure

```bash
├── public
│   ├── manifest.json
│   ├── service-worker.js
│   ├── css
│   │   └── style.css
│   └── img
│       └── bg.jpg
├── src
│   ├── api
│   │   └── index.js
│   └── js
│       └── app.js
├── package.json
├── server.cjs
├── vercel.json
└── README.md
```

---

## 📱 Manifest & PWA

To make the application installable as a Progressive Web App (PWA), we included:

- **Manifest File:** Ensures the app can be downloaded and installed on mobile or desktop devices.
- **Service Worker:** Handles caching, offline functionality, and performance improvements.

Key configuration for `manifest.json`:

```json
{
  "short_name": "Quotes",
  "name": "Quote of the Day App",
  "icons": [
    {
      "src": "/img/icons-192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/img/icons-512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": "/",
  "background_color": "#ffffff",
  "display": "standalone",
  "theme_color": "#000000"
}
```

---

## 🌍 Deployment

This project is deployed on [Vercel](https://vercel.com/). Vercel simplifies the deployment process with automatic builds and serverless functions for handling API requests.

- **Serverless Functions:** We use a simple Node.js server with Express to handle API calls to the FavQs service.
  
  Key part of `vercel.json` configuration:

```json
{
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/index.js" }
  ]
}
```

---

## 🤝 Contributing

We welcome contributions! Feel free to fork the repo and submit pull requests.

---

## 📜 License

This project is licensed under the MIT License.

---
