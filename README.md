# Brunei Red Crescent Landing Page

A modern, responsive landing page for the Brunei Red Crescent Society built with Next.js, TypeScript, and Tailwind CSS.

## 🎯 Features

- **Modern Design**: Clean, humanitarian-focused design with BRC brand colors
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Optimized with Next.js 15 and modern web technologies
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Smooth Animations**: Subtle animations using Framer Motion
- **Multi-page**: Landing page, history page, and donation page

## 🎨 Design System

### Colors
- **Primary Red**: `#C8102E` (BRC Red)
- **White**: `#FFFFFF`
- **Light Gray**: `#F5F5F5`
- **Green**: `#2E7D32` (Accent)
- **Blue**: `#005BBB` (Accent)

### Typography
- **Headings**: Montserrat (Bold, Modern)
- **Body**: Roboto (Clean, Readable)

## 📱 Sections

1. **Hero Section**: Full-width background with crew image, tagline, and CTAs
2. **About/History**: Timeline of BRC's journey from 1948 to today
3. **Services**: Six main service areas with icons and descriptions
4. **Impact**: Animated counters showing achievements
5. **Contact**: Contact information and footer
6. **Mobile Sticky Button**: Floating volunteer button for mobile

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd brc-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
brc-landing/
├── src/
│   ├── app/
│   │   ├── components/     # React components
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── history/        # History page
│   │   └── donate/         # Donation page
│   └── components/         # Reusable components
├── public/
│   └── assets/            # Images and static files
├── tailwind.config.ts     # Tailwind configuration
└── package.json
```

## 🛠️ Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **Google Fonts**: Montserrat and Roboto

## 📄 Pages

### Home Page (`/`)
- Hero section with background image
- About section with timeline
- Services overview
- Impact statistics
- Contact information

### History Page (`/history`)
- Detailed timeline of BRC's history
- Extended descriptions of key milestones
- Call-to-action for volunteering

### Donate Page (`/donate`)
- Bank transfer information
- Online payment options (coming soon)
- Impact of donations
- Contact for receipts

## 🔧 Customization

### Updating Content
- Edit component files in `src/components/`
- Update text content directly in the components
- Modify images in `public/assets/`

### Styling
- Custom colors defined in `tailwind.config.ts`
- Global styles in `src/app/globals.css`
- Component-specific styles using Tailwind classes

### Adding New Pages
1. Create new directory in `src/app/`
2. Add `page.tsx` file
3. Update navigation in `Header.tsx` if needed

## 📱 Mobile Features

- **Sticky Volunteer Button**: Floating action button on mobile
- **Responsive Navigation**: Hamburger menu for mobile
- **Touch-friendly**: Optimized button sizes and spacing
- **Fast Loading**: Optimized images and lazy loading

## 🔗 External Links

- **Volunteer Form**: Google Forms integration
- **Contact**: Mailto links for email and phone
- **Social Media**: Placeholder links (update with actual URLs)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Custom domain configuration available

### Other Platforms
- **Netlify**: Compatible with Next.js
- **AWS Amplify**: Full-stack deployment
- **Traditional Hosting**: Build and upload static files

## 📊 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized for speed and user experience
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic with Next.js

## 🔒 Security

- **HTTPS**: Required for production
- **Content Security Policy**: Configured for security
- **External Links**: Proper `rel="noopener noreferrer"` attributes
- **Form Security**: Google Forms integration

## 📈 Analytics

- **Google Analytics**: Ready for GA4 integration
- **Custom Events**: Track volunteer form submissions
- **Performance Monitoring**: Built-in Next.js analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for the Brunei Red Crescent Society. All rights reserved.

## 📞 Support

For questions or support:
- Email: admin.inquiry@bruneiredcrescent.com
- Phone: +673 123 4567

---

Built with ❤️ for the Brunei Red Crescent Society
