# Kalash Fashion

Kalash Fashion is a full-stack ecommerce application for browsing, ordering, and managing ethnic wear — lehengas, sarees, chaniya cholis, and more. Built on the MERN stack with Redux Toolkit and Material UI, it provides separate user and admin experiences.

---

## Features

### User
- Product browsing with category strip, filters (brand, category), and pagination
- Product detail page with image gallery and reviews
- Add to cart, wishlist, and checkout flow (COD / UPI / Card via Razorpay)
- Order history with order detail view
- Profile and address management
- OTP-based account verification
- Forgot / reset password via email link
- Show/hide password toggle on login

### Admin
- Dashboard with total sales, today's sales, avg profit margin, pending orders
- Profit/Loss trend and Sales & Purchase charts
- Sales Records table (sortable, searchable, filterable by status and category)
- Product management — add, update, soft delete
- Order management — status updates, order detail page
- Order detail page: product images, customer info, status update, message to customer, customer reviews with admin reply
- Admin profile page

### Security
- JWT auth stored in HTTP-only cookies
- OTP verification on signup
- Password reset via time-limited email token
- Admin-protected routes

---

## Tech Stack

| Layer     | Technology                              |
|-----------|-----------------------------------------|
| Frontend  | React 18, Redux Toolkit, Material UI v5, Framer Motion |
| Backend   | Node.js, Express                        |
| Database  | MongoDB (Mongoose)                      |
| Payments  | Razorpay                                |
| Email     | Nodemailer (SMTP)                       |

---

## Project Setup

### Prerequisites
- Node.js v21.1.0 or later
- MongoDB running locally

### Install dependencies

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd backend
npm install
```

---

## Environment Variables

### Backend (`backend/.env`)
```env
MONGO_URI="mongodb://localhost:27017/kalash-fashion"
ORIGIN="http://localhost:3000"

EMAIL="your-email@example.com"
PASSWORD="your-email-app-password"

LOGIN_TOKEN_EXPIRATION="30d"
OTP_EXPIRATION_TIME="120000"
PASSWORD_RESET_TOKEN_EXPIRATION="2m"
COOKIE_EXPIRATION_DAYS="30"

SECRET_KEY="your-secret-key"
PRODUCTION="false"

# Razorpay (optional — for UPI/Card payments)
RAZORPAY_KEY_ID="your_test_key_id"
RAZORPAY_KEY_SECRET="your_test_key_secret"
```

### Frontend (`frontend/.env`)
```env
VITE_BASE_URL="http://localhost:8000"
VITE_RAZORPAY_KEY_ID="your_test_key_id"
```

---

## Run the App

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

Access:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

---

## Seeding Demo Data

Drops the existing database and seeds fresh demo products, users, orders, reviews, and addresses:

```bash
cd backend
npm run seed
```

Demo accounts seeded:

| Role  | Email               | Password   |
|-------|---------------------|------------|
| User  | demo@gmail.com      | Demo@123   |
| Admin | admin@example.com   | Admin123$  |

---

## Admin Access

### Option A — use the seeded admin (after `npm run seed`)
```
Email:    admin@example.com
Password: Admin123$
```

### Option B — create or reset an admin without wiping data
```bash
cd backend
npm run create-admin -- admin@example.com Admin123$
```

Then sign in and navigate to:
```
http://localhost:3000/admin/dashboard
```

---

## Available Scripts

### Backend
| Script | Description |
|--------|-------------|
| `npm run dev` | Start backend with nodemon (hot reload) |
| `npm start` | Start backend without hot reload |
| `npm run seed` | Drop DB and seed demo data |
| `npm run create-admin -- <email> <password>` | Create or reset an admin user |

### Frontend
| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |

---

## Project Structure

```
mern-ecommerce-main/
├── backend/
│   ├── controllers/       # Route handlers
│   ├── database/          # MongoDB connection
│   ├── middleware/         # JWT verification
│   ├── models/            # Mongoose schemas
│   ├── routes/            # Express routers
│   ├── scripts/           # createAdmin utility
│   ├── seed/              # Demo data seeders
│   ├── utils/             # Email, OTP, token helpers
│   └── index.js
└── frontend/
    └── src/
        ├── app/           # Redux store
        ├── assets/        # Images and animations
        ├── config/        # Axios instance
        ├── constants/     # Shared constants
        ├── features/      # Feature slices and components
        │   ├── admin/
        │   ├── auth/
        │   ├── cart/
        │   ├── order/
        │   ├── products/
        │   ├── review/
        │   ├── wishlist/
        │   └── ...
        ├── hooks/
        ├── pages/
        └── App.jsx
```

---

## Notes

- Do not commit `.env` files — they are listed in `.gitignore`.
- In production set `PRODUCTION="true"` in `backend/.env` to enable secure, SameSite=None cookies.
- Razorpay integration is optional — COD works without any Razorpay keys.
- Email (OTP / password reset) requires a valid SMTP configuration in `backend/.env`.
