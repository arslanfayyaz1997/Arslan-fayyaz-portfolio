# Arslan Fayyaz — Interactive 3D Portfolio

A modern, fully responsive developer portfolio designed as an immersive digital experience rather than a traditional static resume.

## Highlights

- Interactive 3D hero built with React Three Fiber and Three.js
- Smooth motion and scroll-reveal animations
- Responsive navigation and mobile-first layout
- Project showcase driven by structured data
- Skills, services, journey, stats and contact sections
- Interactive project cards and hover states
- Contact form with EmailJS integration
- Client-side validation with clear error/success states
- CV download placeholder
- Personal profile image placeholder
- Accessible semantic sections and reduced-motion support
- Vite-powered development and production build

## Stack

React • Vite • JavaScript • Tailwind CSS • Framer Motion • Three.js • React Three Fiber • Drei • Lucide React • EmailJS

## Setup

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Contact form setup

The form is prepared for EmailJS. Create an EmailJS service/template, then create a `.env.local` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The destination email configured for this portfolio is `arslanfayyaz1997@gmail.com`.

Never put an email account password or SMTP password in frontend code.

## Personal files

Replace:

- `public/profile-placeholder.svg` with your portrait if desired (or keep the elegant placeholder)
- `public/Arslan-Fayyaz-CV.pdf` with your CV
- project image URLs/data in `src/data/projects.js`

## Production

```bash
npm run build
```

The generated `dist` folder can be deployed to Vercel or another static hosting platform.
