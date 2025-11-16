# Portfolio Website - Electronics & VLSI Theme

An innovative, animated portfolio website with an electronics/VLSI theme built using Next.js, React, Framer Motion, Tailwind CSS, and NodeMailer.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email Service**: NodeMailer
- **Language**: TypeScript

## Features

- 🎨 **Electronics-themed Design**: Circuit board aesthetics with PCB-inspired layouts
- ⚡ **Smooth Animations**: Framer Motion powered transitions and interactions
- 📱 **Fully Responsive**: Mobile-first design approach
- 📧 **Contact Form**: Integrated NodeMailer for email functionality
- 🎯 **Multiple Pages**: Home, About, Education, Projects, Skills, Cabinet, Memories, Contact
- 🌐 **SEO Optimized**: Meta tags and proper semantic HTML

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file for NodeMailer configuration:
```env
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
SMTP_FROM=your-email@example.com
```

3. Customize your content:
   - Update `data/education.ts` with your education details
   - Add your projects to `data/projects.ts`
   - Add skills to `data/skills.ts`
   - Add achievements to `data/achievements.ts`
   - Add professional memories to `data/memories.ts`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-website/
├── app/                 # Next.js app router pages
│   ├── about/          # About/Myself page
│   ├── education/      # Education timeline
│   ├── projects/       # Projects showcase
│   ├── skills/         # Skills visualization
│   ├── cabinet/        # Achievements & Certificates
│   ├── memories/       # Seminars, Conferences, Events
│   ├── contact/        # Contact form
│   └── api/            # API routes (NodeMailer)
├── components/         # Reusable React components
│   ├── Navigation/     # Navbar component
│   ├── Hero/           # Hero section
│   ├── Circuit/        # Circuit board animations
│   ├── Project/        # Project cards
│   ├── Education/      # Education timeline
│   ├── Skills/         # Skills visualization
│   ├── Cabinet/        # Achievement cards
│   ├── Memories/       # Memory gallery
│   └── Contact/        # Contact form component
├── lib/               # Utility functions
│   ├── nodemailer.ts  # Email configuration
│   └── utils.ts       # Helper functions
├── data/              # Content data files
└── public/            # Static assets
```

## Customization

### Colors & Theme
Edit `tailwind.config.js` to customize the electronics-themed color palette:
- PCB greens (`pcb-green`, `pcb-dark-green`)
- Circuit blues (`circuit-blue`, `circuit-dark`)
- Signal colors (`signal-neon`, `signal-cyan`, `signal-purple`)

### Contact Information
Update contact details in:
- `components/Contact/ContactForm.tsx` - Display emails and social links
- `app/api/send-email/route.ts` - Recipient email address

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

