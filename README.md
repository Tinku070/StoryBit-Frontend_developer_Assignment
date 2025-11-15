# **📺 Streaming Dashboard Clone**

### **Next.js 14 • TypeScript • Tailwind CSS • TMDB API**

A simplified streaming-service dashboard inspired by Netflix/Hulu.  
 Built using **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **The Movie Database (TMDB)** for content.

This project demonstrates:

* Server Components with server-side data fetching

* Client Components for UI interactivity

* Dynamic routed detail pages

* Secure environment variables

* Vercel deployment

* AI-assisted development (documented in `AI_Report.md`)

---

## **🚀 Live Demo**

**Vercel Deployment:**  
 👉 https://your-vercel-url.vercel.app

*(Replace with your actual deployed URL)*

---

## **📦 Features**

* ⚡ **Next.js 14 App Router** with server-rendered homepage

* 🔐 **Environment-secured API key**

* 🎞 **Hero Banner** with `<Image fill priority />` for fast LCP

* 🎬 **Reusable MovieRow component** with horizontal scrolling

* 📄 **Dynamic movie detail page** (`/movie/[id]`)

* 🖼 **Optimized TMDB images** via Next/Image

* 📱 Mobile-responsive layout

* 🎯 Fully deployable to **Vercel**

---

## **🛠️ Tech Stack**

* **Next.js 14** (App Router)

* **TypeScript**

* **Tailwind CSS**

* **TMDB API** (Public API)

* **pnpm** (package manager)

* **Vercel** (deployment)

---

## **📁 Folder Structure**

`my-streaming-dashboard/`  
`│`  
`├─ app/`  
`│  ├─ layout.tsx               # Root layout`  
`│  ├─ globals.css              # Tailwind + base styles`  
`│  ├─ page.tsx                 # Homepage (Server Component)`  
`│  └─ movie/`  
`│     └─ [id]/`  
`│        └─ page.tsx           # Dynamic Movie Detail Page`  
`│`  
`├─ components/`  
`│  ├─ Header.tsx               # Client Component (nav bar)`  
`│  ├─ HeroBanner.tsx           # Hero banner at top`  
`│  └─ MovieRow.tsx             # Horizontal scroll movie rows`  
`│`  
`├─ lib/`  
`│  └─ tmdb.ts                  # Server-only TMDB fetch functions`  
`│`  
`├─ types/`  
`│  └─ movie.ts                 # Movie TypeScript interfaces`  
`│`  
`├─ public/`  
`│  └─ favicon.ico`  
`│`  
`├─ .env.local                  # TMDB API key (not committed)`  
`├─ next.config.js              # Image domains config`  
`├─ tailwind.config.js`  
`├─ postcss.config.js`  
`├─ README.md`  
`└─ AI_Report.md`

---

# **🧩 Getting Started (Local Development)**

### **1\. Clone the repo**

`git clone <your-repo-url>`  
`cd my-streaming-dashboard`

### **2\. Install dependencies**

`pnpm install`

### **3\. Add environment variable**

Create a file named **`.env.local`** in the project root:

`TMDB_API_KEY=your_tmdb_api_key_here`

⚠️ *Never commit this file.*

### **4\. Run the development server**

`pnpm dev`

Visit:  
 👉 [http://localhost:3000](http://localhost:3000)

---

# **🌐 Deployment (Vercel)**

### **1\. Push your project to GitHub**

`git add .`  
`git commit -m "initial project"`  
`git push origin main`

### **2\. Import project in Vercel**

Go to: [https://vercel.com/import](https://vercel.com/import)

### **3\. Add environment variable**

In Vercel → Project Settings → Environment Variables:

| Key | Value |
| ----- | ----- |
| `TMDB_API_KEY` | your TMDB key |

Apply to:

* Production

* Preview

* Development

### **4\. Deploy**

Vercel automatically builds and deploys the app.

---

# **🔧 Technical Notes**

### **✔ Server-side Fetching**

All TMDB API calls are made in **server components** or inside `lib/tmdb.ts` to keep your API key secure.

### **✔ Optimized Images**

`next.config.js` includes:

`images: {`  
  `domains: ['image.tmdb.org']`  
`}`

### **✔ Modern Next.js 14 Dynamic Route**

Because Next.js 14+ returns `params` as a Promise, dynamic pages use:

`interface Props {`  
  `params: Promise<{ id: string }>`  
`}`

`const { id } = await params;`

---

# **🧪 Checklist Before Submission**

* Homepage loads 3 movie rows (Popular, Now Playing, Top Rated)

* Hero banner shows first popular movie

* Clicking any movie opens `/movie/[id]`

* Detail page displays poster, title, overview, rating

* `.env.local` is ignored in `.gitignore`

* Vercel deployment works in production

* `TMDB_API_KEY` set in Vercel env variables

* `AI_Report.md` completed

* Repo link \+ Vercel URL are included in AI\_Report

---

# **🧠 AI Usage**

AI-assisted coding and prompting details are included in:  
 👉 **AI\_Report.md**

---

# **🙌 Acknowledgments**

* The Movie Database (TMDB) for the public API

* Next.js team for App Router

* Tailwind CSS for utility-class styling

