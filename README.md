# 🌿 Green Nest - Plant Care Tracker

![Green Nest - Plant Care Tracker](https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-CodesWithRakib/blob/main/src/assets/cover.png)

**Live Website:** [Green Nest](https://green-nest-plant-care-tracker.web.app/)
Made with ❤️ by [Md.Rakib Islam](https://github.com/CodesWithRakib)

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
- 🌐 **Share Your Plants** with friends and family
- 🚫 Custom **404 Page** and route protection for private routes

---

## 🚀 Tech Stack

- **Frontend:** React, Tailwind CSS, React Router DOM,daily UI
- **Backend:** Express.js, MongoDB,Cors , dotenv
- **Authentication:** Firebase Auth
- **Deployment:** Firebase (Client), Vercel (Server)
- **Additional Packages:** Date-fns, React Toastify ,Sweetalert2 ,react-slick, slick-carousel,flowbite,react-tooltip

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
│   │   ├── Root.jsx
│   ├── auth/
│   │   ├── AuthProvider.jsx
│   │   ├── PrivateRoute.jsx
│   ├── firebase/
│   │   ├── firebase.config.js
│   ├── Routes/
│   │   ├── routes.jsx
│   ├── firebase/
│   ├── assets/
│   │   ├── cover.png
│   ├── index.css
│   ├── main.jsx
│   ├── components/
│   │   ├── BeginnerFriendly.jsx
│   │   ├── CustomerReviews.jsx
│   │   ├── AllPlants.jsx
│   │   ├── Hero.jsx
│   │   ├── Accordion.jsx
│   │   ├── Footer.jsx
│   │   ├── Features.jsx
│   │   ├── HeroSlider.jsx
│   │   ├── NewPlants.jsx
│   │   ├── NewPlantCard.jsx
│   │   ├── NoPlants.jsx
│   │   ├── MyPlantCard.jsx
│   │   ├── UpdatePlant.jsx
│   │   ├── PlantCard.jsx
│   │   └── PlantCareMistake.jsx
│   ├── pages/
│   │   ├── ErrorPage.jsx
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
│   │   └── AddPlant.jsx
│   │   └── AllPlants.jsx
│   │   └── Home.jsx
│   │   └── Loading.jsx
│   │   └── MyPlants.jsx
│   │   └── PlantDetails.jsx
│   │   └── UserProfile.jsx
│   │   └── UpdatePlant.jsx

 server/
├── index.js
├── .env
├── .gitignore
└── package.json
└── package-lock.json

```

---

# Home Page

![Home Page](https://i.ibb.co/7NNBW1Bw/green-nest-plant-care-tracker-web-app-all-plants-5.png)

---

# All Plants Page

![All Plants Page](https://i.ibb.co/6RykVZsr/green-nest-plant-care-tracker-web-app-all-plants-4.png)

---

# My Plants Page

![My Plants Page](https://i.ibb.co/Kpcw3tyL/green-nest-plant-care-tracker-web-app-all-plants-3.png)

---

# Add Plant Page

![Add Plant Page](https://i.ibb.co/mVHRwkP2/green-nest-plant-care-tracker-web-app-all-plants-2.png)

---

# Plant Details Page

![Plant Details Page](https://i.ibb.co/BVmw6wVN/green-nest-plant-care-tracker-web-app-all-plants-6.png)

---

# Update Plant Page

![Update Plant Page](https://i.ibb.co/q3TkGDTf/localhost-5173-2.png)

---

# Login Page

![Login Page](https://i.ibb.co/7J7PRwJb/green-nest-plant-care-tracker-web-app-all-plants-7.png)

---

# Sign Up Page

![Sign Up Page](https://i.ibb.co/h1BGDJdB/green-nest-plant-care-tracker-web-app-all-plants-8.png)

---

# Error Page

![Error Page](https://i.ibb.co/M5Bp8szS/localhost-5173-update-plant-682ef6925bec0472159d52fd-dfdsf.png)

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

![Green Nest - Plant Care Tracker](https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-CodesWithRakib/blob/main/src/assets/cover.png)
