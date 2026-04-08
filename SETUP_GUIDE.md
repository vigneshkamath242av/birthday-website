# Birthday Website - Complete Setup Guide

## 🎉 What You've Got

A beautiful, modern React website with:
- ✨ Smooth scroll animations and elegant transitions
- 📸 Image gallery with navigation
- 🎥 Video embed section (YouTube)
- 💬 Inspirational quotes display
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Apple/Patreon aesthetic with premium feel

---

## 📋 STEP 1: Customize Your Content

Open `birthday_website.jsx` and find this section near the top:

```javascript
const friendName = "Sarah"; // Change to her name
const birthDate = "February 20"; // Change to her birthday

const images = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
  // Add your image URLs here
];

const quotes = [
  {
    text: "Your smile lights up every room.",
    author: "Everyone who knows you"
  },
  // Add your quotes here
];

const videos = [
  {
    id: "dQw4w9WgXcQ",  // YouTube video ID
    title: "Favorite Moment 1"
  },
  // Add YouTube video IDs here
];
```

### How to get YouTube video IDs:
- Go to any YouTube video
- Look at the URL: `youtube.com/watch?v=XXXXX`
- The XXXXX is your video ID
- Example: For https://www.youtube.com/watch?v=dQw4w9WgXcQ, use "dQw4w9WgXcQ"

### How to get image URLs:
**Option A: Upload to free image hosting**
1. Go to https://imgur.com or https://imgbb.com
2. Upload your images
3. Copy the image URL (direct link)
4. Paste into the `images` array

**Option B: Use local images (advanced)**
- Place images in `public/images/` folder
- Use paths like `"/images/photo1.jpg"`

---

## 🚀 STEP 2: Set Up Locally (Optional - for testing)

If you want to test locally before deploying:

```bash
# Navigate to your project folder
cd /path/to/birthday-website

# Install dependencies
npm install

# Start development server
npm start
```

Your site will open at `http://localhost:3000`

---

## 📦 STEP 3: Deploy to Vercel (FREE - Recommended)

**Why Vercel?** Free hosting, automatic updates, custom domain support, blazing fast.

### 3A: Create a GitHub Account (if you don't have one)
1. Go to https://github.com/signup
2. Create a free account
3. Verify your email

### 3B: Upload Your Code to GitHub
1. Create a new repository at https://github.com/new
2. Name it `birthday-website`
3. Select "Public"
4. Click "Create repository"
5. Follow the instructions to upload your code (they'll give you commands to copy-paste)

### 3C: Deploy to Vercel
1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel
4. Click "New Project"
5. Select your `birthday-website` repository
6. Click "Import"
7. Vercel will auto-detect settings - just click "Deploy"
8. Wait ~2 minutes for deployment
9. You'll get a live URL like `https://birthday-website-xyz.vercel.app`

---

## 🌐 STEP 4: Buy & Connect Your Domain

### 4A: Purchase Domain
1. Go to https://www.namecheap.com or https://domains.google
2. Search for her name (e.g., "sarah.com" or "sarahjones.com")
3. Select a domain (~$10-15/year)
4. Complete purchase
5. Save your registrar login info

### 4B: Connect Domain to Vercel
1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project
3. Go to Settings > Domains
4. Enter your domain name
5. Follow instructions to update DNS:
   - Go back to your domain registrar (Namecheap/Google)
   - Find "DNS Settings" or "Name Servers"
   - Update to Vercel's name servers:
     - `ns1.vercel-dns.com`
     - `ns2.vercel-dns.com`
     - `ns3.vercel-dns.com`
     - `ns4.vercel-dns.com`
   - Save changes (can take 24-48 hours to fully propagate)
6. After DNS updates, your site will be live at `https://yourcustomdomain.com`

---

## 🎨 Customization Tips

### Change Colors
Edit the className colors in `birthday_website.jsx`:
- `bg-gray-900` → Background color
- `text-gray-900` → Text color
- `border-gray-300` → Border color
- You can use: `gray`, `red`, `blue`, `pink`, `purple`, etc.

### Adjust Fonts
In `src/index.css`, import different Google Fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap');
```

### Add More Sections
Copy an existing section and modify it (e.g., duplicate the quotes section to create a new one).

---

## 🐛 Troubleshooting

**Images not showing?**
- Check image URLs are correct and accessible
- Try using https:// not http://

**Videos not playing?**
- Make sure you're using YouTube video IDs (not Vimeo or other platforms)
- Video IDs are 11 characters in the URL

**Site looks weird on mobile?**
- All responsive classes are included - should work automatically
- Test in Chrome DevTools (F12) with mobile view

**Domain not working after 24 hours?**
- Clear browser cache (Ctrl+Shift+Delete)
- Try different browser
- Check DNS settings are correct at your registrar

---

## 📝 Alternative Deployment Options

### Option: Netlify (Also Free)
1. Go to https://netlify.com
2. Click "New site from Git"
3. Connect GitHub (same as Vercel)
4. Select repository
5. Deploy
6. Add domain in Site settings

### Option: GitHub Pages (Free but slightly more complex)
1. In package.json, add: `"homepage": "https://yourusername.github.io/birthday-website"`
2. Run: `npm run build`
3. Follow GitHub Pages setup instructions

---

## 🎁 Final Checklist

- [ ] Customized friend's name and birthday
- [ ] Added all images and image URLs
- [ ] Added all quotes
- [ ] Added YouTube videos
- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Domain purchased
- [ ] DNS connected to Vercel
- [ ] Site live at custom domain
- [ ] Tested on mobile and desktop
- [ ] Shared with your friend!

---

## 💡 Pro Tips

1. **Backup your code** - Keep a copy on your computer
2. **Update content** - You can always edit and redeploy (just push to GitHub, Vercel auto-deploys)
3. **Analytics** - Vercel has built-in analytics to see who visited
4. **SSL/HTTPS** - Automatic with Vercel (secure)
5. **Performance** - Your site will be blazingly fast with Vercel's global CDN

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- GitHub Guides: https://guides.github.com
- React Docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs

Good luck! 🚀
