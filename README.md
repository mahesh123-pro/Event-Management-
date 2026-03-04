# Elegance Events Management - Premium Website

This is a premium, lead-generation website for an Event Management Company, built with React, Node.js, and MongoDB.

## Features

- **Premium Aesthetics**: Gold and cream luxury theme with Playfair Display typography.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Dynamic Content**: Filterable gallery, animated services, and smooth scroll effects.
- **Inquiry System**: Full-featured contact form with backend storage.
- **Admin Console**: Secure dashboard to manage inquiries and gallery assets.

## Tech Stack

- **Frontend**: React (Vite) + Tailwind CSS + Framer Motion + Lucide Icons
- **Backend**: Node.js + Express + MongoDB + JWT Auth
- **Forms**: React Hook Form + Axios

## How to Run

### 1. Prerequisites
- Node.js installed.
- MongoDB running locally or a MongoDB Atlas URI.

### 2. Setup Backend
1. Go to the `server` folder.
2. Ensure dependencies are installed: `npm install`
3. Check `.env` file for configuration (MongoDB URI, JWT secret, etc.).
4. Start the server: `node index.js`

### 3. Setup Frontend
1. Go to the `client` folder.
2. Ensure dependencies are installed: `npm install`
3. Start the Vite dev server: `npm run dev`

### 4. Admin Access
- URL: `http://localhost:5173/admin/login`
- Default Username: `admin`
- Default Password: `password123` (Change this in `.env` for production!)

## Project Structure

- `/client`: React source code, components, and styling.
- `/server`: Node.js API, database models, and authentication logic.

---
*Created with ❤️ by Antigravity*
