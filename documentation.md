# Payload CMS Assignment [Basic Documentation]

## 📌 Project Overview

This project is built using **Next.js 15** and **Payload CMS**.  
It demonstrates how to create a CMS-driven application with dynamic pages, blogs, and form submissions managed through an admin panel. With Localization using payload CMS and i18n for static content.
Only CTA blocks, Header section and blogs are localized as whole website localization was not requested
---

### Deployed URL: 
- **main website**: https://restro-assignment-eta.vercel.app/en
- **admin panel**: https://restro-assignment-eta.vercel.app/admin
- **admin cred**: iasad@gmail.com, password: 123456
## 🛠 Tech Stack

- **Framework:** Next.js 15
- **CMS:** Payload CMS
- **Database:** MongoDB Atlas
- **Styling:** Tailwind CSS / shadcn-ui
- **Internationalization:** next-intl
- **Language:** TypeScript

---

## ✨ Features

- Dynamic pages managed via Payload CMS
- Blog management system with detail page as requested in assignment docs (product feature page i have do blog instead)
- Admin dashboard for content control
- SEO-friendly content structure
- Contact form with database storage
- Multi-language support (i18n)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/iasadk/restro-assignment.git 
cd <project-folder>

# Instrall dependencies:
npm install

# .env [attaching sample creds for direct testing of this project]  
NEXT_PUBLIC_SITE_URL=https://p9rf4sf9-8500.inc1.devtunnels.ms
MONGODB_URI=mongodb+srv://asad:kISDQS8osgfbI5Ko@restroworks.xr617yo.mongodb.net/restroworks-assignment
PAYLOAD_SECRET=628fde58d637e07ca86f568b


# Run:
npm run dev

```

## Project Structure

```
├───media
├───messages
├───src
│   ├───app
│   │   ├───(frontend)
│   │   │   └───[locale]
│   │   │       ├───blogs
│   │   │       │   └───[slug]
│   │   │       └───contact
│   │   ├───(payload)
│   │   │   ├───admin
│   │   │   │   └───[[...segments]]
│   │   │   └───api
│   │   │       ├───graphql
│   │   │       ├───graphql-playground
│   │   │       └───[...slug]
│   │   ├───api
│   │   │   └───contact
│   │   └───my-route
│   ├───blocks
│   ├───collections
│   ├───components
│   │   ├───custom
│   │   │   └───blog
│   │   └───ui
│   ├───i18n
│   └───lib
└───tests
    ├───e2e
    └───int
```

### Payload CMS
- **Collections:** Blogs, Pages, Contact Submissions, Media (default), Users (default)
- **Reusable Blocks:** CTA, Featured Section, Highlighted Blog, SEO, Testimonial

### Internationalization (i18n)
- Implemented using **next-intl**
- Supports multiple languages: **en**, **fr**, **es**
- Locale-based routing for content rendering

### SEO
- SEO fields managed via **Payload CMS**
- Localized meta title and meta description support
- Structured for easy Open Graph integration

