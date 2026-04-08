# 🎂 BIRTHDAY WEBSITE - QUICK START

## What You Need to Do

### STEP 1: Get Your Images & Videos Ready (5 min)
1. Gather her favorite photos
2. Upload to https://imgur.com or https://imgbb.com (free)
3. Copy image links
4. Get YouTube video IDs from any videos you want to include

### STEP 2: Customize the Website (10 min)
Open `src/BirthdayWebsite.jsx` and change:
```javascript
const friendName = "Sarah";  // ← Change to her name
const birthDate = "February 20";  // ← Change to her birthday

const images = [
  "https://your-image-urls-here",
  "https://another-image-url",
];

const quotes = [
  { text: "She lights up my life", author: "Friend" },
  // Add more quotes
];

const videos = [
  { id: "VIDEO_ID_HERE", title: "Our Moment" },
  // Add YouTube video IDs
];
```

### STEP 3: Create GitHub Account (2 min)
Go to https://github.com/signup - click "Create account"

### STEP 4: Upload Code to GitHub (5 min)
1. Create new repo at https://github.com/new
2. Name it `birthday-website`
3. Copy-paste the commands they give you to upload your code

### STEP 5: Deploy to Vercel (3 min)
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy" - done! 🎉
5. You'll get a free live URL

### STEP 6: Buy Domain (5 min)
1. Go to https://namecheap.com
2. Search "yourfriendname.com"
3. Buy it (~$10-15/year)

### STEP 7: Connect Domain to Vercel (10 min)
1. In Vercel project settings → Domains
2. Enter your new domain
3. Update DNS at your domain registrar to Vercel's nameservers
4. Wait 24 hours for DNS to update
5. Site goes live at your custom domain! ✨

---

## File Structure
```
birthday-website/
├── src/
│   ├── BirthdayWebsite.jsx  ← CUSTOMIZE THIS
│   ├── App.js
│   ├── index.js
│   └── index.css
├── public/
│   └── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── SETUP_GUIDE.md  ← Full details here
└── .gitignore
```

---

## Total Time: ~40 minutes
- Customization: 10 min
- GitHub setup: 7 min
- Deploy to Vercel: 3 min
- Buy domain: 5 min
- Connect domain: 10 min
- Buffer/troubleshooting: 5 min

---

## Website Features
✨ Smooth scroll animations
📸 Image gallery with thumbnails
🎥 YouTube video embeds with lightbox
💬 Quote display section
📱 Mobile responsive
🎨 Premium Apple-like aesthetic
⚡ Super fast (Vercel global CDN)
🔒 HTTPS secure (automatic)

---

## Support
- Got stuck? Read SETUP_GUIDE.md (detailed explanations)
- Vercel help: https://vercel.com/docs
- GitHub help: https://help.github.com

---

Good luck! Your friend is going to LOVE this 🎁
