# Pixel Tracking Script

This project implements a **pixel tracking system** that captures user interactions, browser details, and cookies, then sends this data to a server for analytics.

## 🚀 How It Works
1. A **JavaScript tracking script** (`pixel.js`) is injected into a webpage.
2. The script collects details like **page URL, referrer, screen size, user agent, cookies, and events**.
3. It sends this data to the backend using a **1x1 pixel image request**.
4. The backend logs this data for analysis.

## 📌 How to Use
Include this script in the `<head>` of your website:
```html
<script src="http://localhost:2000/v1?&cc=232323"></script>
```

## 🛠 Setup & Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/pixel-tracking.git
cd pixel-tracking
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Server
```sh
npm start
```
The server runs on **http://localhost:2000**.

## 📡 Endpoints
### Serve Tracking Script
```http
GET /v1
```
- Returns `pixel.js` to be included in websites.

### Capture Pixel Event
```http
GET /pixel
```
- Logs tracking data.
- Returns a `pixel.gif` (1x1 image).

## 🏗 Features
✅ Captures **page load, referrer, screen size, cookies**  
✅ Supports **custom event tracking**  
✅ Encodes cookies in **Base64** for analytics  
✅ Backend stores event data with **IP address**  
✅ **Asynchronous** tracking to prevent page slowdown  

## 💡 Next Steps
🔹 Store tracking data in a database  
🔹 Add a dashboard to view analytics  
🔹 Deploy to a production server  

📢 **Have questions or suggestions?** Drop a comment or open an issue!

---
📌 *Built with ❤️ BY OM*