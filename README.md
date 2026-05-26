# ☀️ O'Sun - Strapi CMS

## 📜 Description

Strapi CMS manages the editorial content of the O'Sun website:
service descriptions, presentation texts, and testimonials.
It exposes a REST API consumed by the Next.js frontend (read-only GET requests).

This repository is the backend CMS only.
The main application lives in the [o-sun repository](https://github.com/npelcat/o-sun).

---

## 🔬 Technologies Used

- **Strapi v5** — headless CMS with REST API
- **PostgreSQL** — local database for development (via DBeaver)
- **Supabase** — PostgreSQL hosting in production (public schema)
- **Cloudinary** — image storage and delivery in production
- **Koyeb** — cloud hosting for the production instance

---

## 💿 Installation and Setup

### 🔧 Prerequisites

- **Node.js** (v18+ recommended)
- **npm** or **yarn**
- **PostgreSQL** running locally

---

### 1. Clone the repository

```bash
git clone https://github.com/npelcat/o-sun-strapi.git
cd o-sun-strapi
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Fill in the values in `.env` (see **Environment Variables** section below).

### 4. Start the development server

```bash
npm run develop
```

The Strapi admin panel will be available at: **http://localhost:1337/admin**

---

## 🔑 Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret

# Database (local PostgreSQL)
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=your-database-name
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=your-password
DATABASE_SSL=false

# Cloudinary (production only)
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_KEY=your-cloudinary-key
CLOUDINARY_SECRET=your-cloudinary-secret
CLOUDINARY_URL=cloudinary://key:secret@name
```

> ⚠️ Never commit your `.env` file.
> Only `.env.example` with placeholder values is versioned.

---

## 🗄️ Database

| Environment | Database |
|---|---|
| Development | Local PostgreSQL (via DBeaver) |
| Production | Supabase — public schema |

Strapi manages its own tables in the `public` schema of the Supabase database.
The Next.js application uses the `booking` schema in the same database.
The two schemas are fully isolated from each other.

---

## 🖼️ Image Storage

In production, images uploaded via the Strapi admin panel are stored
on **Cloudinary**. Local development uses Strapi's default local storage.

---

## 🚀 Deployment

Deployment is automated via **Koyeb**, connected to this GitHub repository.
Every push to `main` triggers a new deployment automatically.

Production URL: **https://annual-bessie-nadcat-17feb7ed.koyeb.app**

> This URL is internal and consumed by the Next.js frontend only.
> It is not intended to be accessed directly by end users.

---

## 🔒 Security

- The Strapi admin panel is protected by authentication
- Each content type exposes only the necessary permissions
  (`find`, `findOne`) — no create, update, or delete from the frontend
- All secrets are injected via Koyeb environment variables in production
  and never stored in the repository

---

## 🛠️ Available Scripts

- `npm run develop` — Start development server with auto-reload
- `npm run start` — Start production server
- `npm run build` — Build the admin panel

---

## 👩‍💻 Author

**@nad_cat** – Passionate Full Stack Developer, France
📧 [LinkedIn](https://www.linkedin.com/in/nadege-pelcat)

---

## 📄 License

This project is under private license. All rights reserved.
