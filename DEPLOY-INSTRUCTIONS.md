# Fix Images and Deploy to GitHub Pages

## 1. ✅ Code Already Updated
Your `ProjectsSection.jsx` has been updated to use the correct image paths.

## 2. 📁 Copy Images (DO THIS NOW)

**Open File Explorer and:**
1. Create folder: `c:\Users\USER\OneDrive\Desktop\Portfolio\public\images`
2. Copy these 5 files from `src\images` to `public\images`:
   - `Gemini_Generated_Image_65dg1165dg1165dg.png` (TravelMania)
   - `WhatsApp Image 2026-01-27 at 10.48.41 AM.jpeg` (SafeZone)
   - `1755559905251.jpg` (Fitra)
   - `1764889492306.jpg` (JobFinder)
   - `Screenshot 2026-01-27 102713.png` (CryptoViz)

## 3. 🚀 Build and Deploy

After copying the images, run these commands:

```bash
npm run build
```

Then commit and push:

```bash
git add .
git commit -m "Fix: Add images to public folder for GitHub Pages"
git push origin main
```

## 4. ✨ Done!

Wait 1-2 minutes for GitHub Actions to complete, then check your site:
`https://navodadasun.github.io/Portfolio/`

All 5 project images should now be visible! 🎉
