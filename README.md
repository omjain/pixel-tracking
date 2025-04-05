# 🎯 Pixel Tracking System

A lightweight, multi-tenant **pixel tracking system** for websites. It captures user interactions, browser metadata, and cookies — and sends the data to your backend for analytics or machine learning.

---

## What is Pixel Tracking?

**Pixel tracking** uses a tiny, invisible 1x1 image (a “tracking pixel”) embedded in a webpage. When the image loads, it triggers a request to your server, allowing you to log user activity like:

- Page views  
- Referrer URLs  
- Screen dimensions  
- User agent  
- IP address  
- Cookies  
- Custom events

This project enhances traditional tracking pixels with a **JavaScript layer** to collect richer session data.

---

## 🚀 Why Use This Project?

- ✅ Multi-tenant support via unique `cc` keys  
- ✅ Tracks essential browser and session data  
- ✅ Base64-encoded cookies for easier handling  
- ✅ Built for integration with dashboards and ML models  
- ✅ Lightweight, asynchronous, and non-intrusive

---

## ⚙️ How It Works

1. A website includes a **JavaScript snippet** (`pixel.js`) in its `<head>`.
2. The script gathers data like URL, screen size, cookies, and referrer.
3. This data is sent to your backend using a **1x1 transparent GIF** request.
4. The backend receives and logs this tracking information.

---

## 📌 How to Use

The script accepts a `cc` parameter (code), allowing you to manage tracking separately for each website or client.
Add this script tag to the `<head>` of the website you want to track:

```html
<script src="http://localhost:2000/v1?cc=YOUR_UNIQUE_CLIENT_KEY"></script>
```

---

## 🛠 Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/omjain/pixel-tracking.git
cd pixel-tracking
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
npm start
```

The server runs locally at:  
`http://localhost:2000`

---

## 📡 API Endpoints

### `GET /v1`
- Serves the JavaScript tracking script (`pixel.js`)

### `GET /pixel`
- Receives and logs tracking data
- Responds with a 1x1 transparent pixel (`pixel.gif`)

---

## 🏗 Features

- ✅ Tracks page views and session metadata  
- ✅ Logs referrer, screen size, cookies, and IP address  
- ✅ Supports custom event tracking  
- ✅ Base64-encoded cookies  
- ✅ Fully asynchronous (no impact on page load)  
- ✅ Multi-tenant tracking support  

---

## 🧭 Planned Features
 
- 🧠 Train ML models on user behavior data
- 📊 Automated segmentation based on engagement patterns
- 🔍 Anomaly detection for unusual traffic or fraud
- 🧬 Personalization recommendations via behavior modeling
- 🕵️‍♂️ Churn prediction & conversion forecasting
- 📊 Build a client-specific analytics dashboard  

---

## 📬 Feedback & Contributions

Found a bug? Got a feature idea?  
Feel free to open an issue or submit a pull request.

---

## 📄 License

Licensed under the MIT License.

---

### 🚀 Built with ❤️ by [Om](https://github.com/omjain)
