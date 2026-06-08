# Portfolio Website - Muzaffar Ameen

A modern, responsive portfolio website built with React, featuring smooth animations, interactive UI components, and a fully functional contact form.

## 🚀 Live Demo

[View Live Site](#) <!-- Add your deployed URL here -->

## ✨ Features

- **Modern UI/UX** - Clean, professional design with smooth animations
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Contact Form** - Integrated EmailJS for seamless message delivery
- **Interactive Sections** - Engaging user experience with hover effects and transitions
- **Performance Optimized** - Fast loading times and smooth interactions

## 🛠️ Built With

- **React** - Frontend framework
- **EmailJS** - Contact form email service
- **CSS3** - Custom styling with animations
- **Create React App** - Project bootstrapping

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- npm or yarn package manager
- EmailJS account (for contact form functionality)

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure EmailJS

Create a free account at [EmailJS](https://www.emailjs.com/) and set up:

1. **Email Service**: Connect your Gmail account
2. **Email Template**: Create a template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
3. **Get credentials**: Service ID, Template ID, and Public Key

### 4. Update EmailJS Configuration

Open `src/components/Contact/Contact.jsx` and replace:
```javascript
const EMAILJS_SERVICE_ID  = "your_service_id";
const EMAILJS_TEMPLATE_ID = "your_template_id";
const EMAILJS_PUBLIC_KEY  = "your_public_key";
```

### 5. Run the development server
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📦 Available Scripts

### `npm start`
Runs the app in development mode with hot reload.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.  
Optimizes the build for best performance with minification.

### `npm run eject`
**Note: This is a one-way operation!**  
Ejects from Create React App to customize configurations.

## 📁 Project Structure
```
portfolio/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   └── ... (other components)
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🎨 Customization

### Update Contact Information

Edit `src/components/Contact/Contact.jsx`:
```javascript
const contactCards = [
  {
    label: "Email",
    value: "your-email@gmail.com",
    href: "mailto:your-email@gmail.com",
  },
  {
    label: "Phone",
    value: "+92 XXX XXXXXXX",
    href: "tel:+92XXXXXXXXX",
  },
  // ... update other cards
];
```

### Modify Styling

- Global styles: `src/App.css`
- Component styles: `src/components/[Component]/[Component].css`
- CSS variables for easy theming

## 🚀 Deployment

### Build for production
```bash
npm run build
```

### Deploy to hosting platforms:

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy
```

**GitHub Pages:**
```bash
npm install --save-dev gh-pages

# Add to package.json:
"homepage": "https://yourusername.github.io/portfolio",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy:
npm run deploy
```

## 📧 Contact Form Setup Guide

Detailed EmailJS setup instructions:

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add Gmail service and copy Service ID
3. Create email template with required variables
4. Copy Template ID and Public Key
5. Update credentials in `Contact.jsx`
6. Test the form!

## 🐛 Troubleshooting

### Contact form not sending emails?
- Verify EmailJS credentials are correct
- Check browser console for errors
- Ensure template variables match form field names
- Check Gmail spam folder
- Test template in EmailJS dashboard

### Build fails?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Muzaffar Ameen**
- Email: muzaffarameen389@gmail.com
- LinkedIn: [muzaffar-ameen](https://linkedin.com/in/muzaffar-ameen)
- Location: Johar Town, Lahore, Pakistan

## 🙏 Acknowledgments

- Built with Create React App
- Email service by EmailJS
- Icons and design inspiration from modern web trends

---

**⭐ Star this repo if you found it helpful!**