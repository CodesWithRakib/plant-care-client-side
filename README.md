# 🌿 Green Nest - Plant Care Tracker

![Green Nest - Plant Care Tracker](https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-CodesWithRakib/tree/main/src/assets/cover.png?raw=true)
Made with ❤️ by [Md.Rakib Islam](https://github.com/CodesWithRakib)
**Live Website:** [Green Nest](https://green-nest-plant-care-tracker.web.app/)

Green Nest is a full-stack plant management application that helps users log, track, and care for their beloved houseplants. Whether you're growing succulents, bonsais, or jungle plants, this platform keeps you organized and informed.

---

## 🔑 Features

- 🔒 **User Authentication** with Email/Password and Google Login
- 🌱 **Add, View, Update, and Delete** your personal plants
- 📅 **Watering schedule tracking** with smart date inputs
- 🌙 **Dark/Light Mode Toggle** for better accessibility
- 📊 **Plant Sorting** by care level and next watering date
- 🎨 **Fully Responsive Design** for mobile, tablet, and desktop
- 🎥 **Interactive UI** using react and tailwindcss
- 📧 **Personalized Data** saved per user with secure access
- 🚫 Custom **404 Page** and route protection for private routes

---

## 🚀 Tech Stack

- **Frontend:** React, Tailwind CSS, React Router DOM,daily UI
- **Backend:** Express.js, MongoDB,Cors , dotenv
- **Authentication:** Firebase Auth
- **Deployment:** Firebase (Client), Vercel (Server)
- **Additional Packages:** Date-fns, React Toastify ,Sweetalert2 ,react-slick, slick-carousel,flowbite

---

## 🧪 Main Pages and Routes

### 🌐 Public Routes

- `/` — Home Page (Banner, New Plants, FAQs, Tips)
- `/all-plants` — See all shared plants with sorting
- `/login` — Login with form and social provider
- `/register` — User sign-up with validation
- `*` — Custom 404 Not Found Page

### 🔒 Private Routes

- `/add-plant` — Add new plant with detailed form
- `/my-plants` — View, update, or delete user-specific plants
- `/plant/:id` — View detailed plant information
- `/update/:id` — Edit a specific plant's data

---

## 📦 Project Structure

```bash
client/
├── README.md
├── .gitignore
├── vite.config.js
├── index.html
├── eslint.config.js
├── package.json
├── package-lock.json
├── src/
│   ├── layouts/
│   ├── auth/
│   ├── firebase/
│   ├── Routes/
│   ├── firebase/
│   ├── assets/
│   │   ├── cover.png
│
│   ├── index.css
│   ├── main.jsx
│   ├── components/
│   │   ├── AddPlant.js
│   │   ├── AllPlants.js
│   │   ├── Banner.js
│   │   ├── FAQs.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Home.js
│   │   ├── NewPlants.js
│   │   ├── Plant.js
│   │   ├── PrivateRoute.js
│   │   ├── UpdatePlant.js
│   │   ├── UserProfile.js
│   │   └── UserPlants.js
│   ├── firebase.config.js
│   ├── pages/
│   │   ├── ErrorPage.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   └── SharedPlants.js
│   ├── Routes/
│   │   ├── PrivateRoute.js
│   │   ├── routes.js
│   │   └── userRoutes.js
 server/
├── index.js
├── .env
├── .gitignore
└── package.json
└── package-lock.json

```

## 🌟 Deployment Goals & Rules Met

- ✅ **15+ Client-Side GitHub Commits**
- ✅ **8+ Server-Side GitHub Commits**
- ✅ **Responsive Design** across devices
- ✅ **Environment Variables** used for security
- ✅ **Meaningful Toast Messages** (no default alerts)
- ✅ **Creative Theme:** "Indoor Jungle + Succulents"
- ✅ **Dark/Light Mode Toggle**
- ✅ **Private Routes Persistence on Reload**

---

## 🎉 Final Thoughts

Thank you for visiting the Green Nest Plant Care Tracker! We hope you find it useful and enjoyable. If you have any questions or feedback, please don't hesitate to reach out. Let's grow together!

---

## 🌟 Enjoy the Green Nest Plant Care Tracker! 🌱

![Green Nest - Plant Care Tracker](https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-CodesWithRakib/tree/main/src/assets/cover.png?raw=true)
