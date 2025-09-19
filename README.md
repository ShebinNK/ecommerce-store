<h1 align="center">🛒 E-Commerce Store</h1>

<p align="center">
  A modern full-stack E-Commerce platform built with the MERN stack, JWT authentication, and Stripe payment integration.
</p>

---

## ✨ Features

- 🚀 **Full-Stack Setup** with React, Node.js, Express, MongoDB  
- 🔐 **Authentication System** (JWT with Access/Refresh tokens)  
- 📝 **User Management**: Signup, Login, Secure Sessions  
- 🛍️ **Core E-Commerce Functionality**: Products, Categories, Cart  
- 💳 **Stripe Payments** with checkout flow  
- 🏷️ **Coupons & Discounts**  
- 👑 **Admin Dashboard**: Manage products, categories, and users  
- 📊 **Sales Analytics** for admins  
- 🎨 **Responsive UI** styled with Tailwind CSS  
- 🛡️ **Security**: Data protection, secure APIs, Redis caching  
- ☁️ **Cloudinary** for product image storage  

---

## ⚡ Tech Stack

**Frontend:** React, React Router, Tailwind CSS, Framer Motion, Axios  
**Backend:** Node.js, Express.js, MongoDB, Redis, JWT  
**Payments:** Stripe  
**Storage:** Cloudinary (for images)  

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add the following:

```bash
PORT=5000
MONGO_URI=your_mongo_uri

UPSTASH_REDIS_URL=your_redis_url

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:5173
NODE_ENV=development
