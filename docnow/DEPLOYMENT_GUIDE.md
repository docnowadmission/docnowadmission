# 🚀 Live Deployment Guide for DocNow Admission Website

This guide will help you deploy your website to live using **Vercel + Railway** (recommended) or other hosting services.

## 🎯 Recommended Setup: Vercel + Railway

### **Step 1: Prepare Your Code**

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

### **Step 2: Deploy Backend to Railway**

1. **Go to [Railway.app](https://railway.app)**
2. **Sign up/Login** with GitHub
3. **Create New Project** → "Deploy from GitHub repo"
4. **Select your repository** and the `backend-mysql` folder
5. **Add Environment Variables**:
   ```
   DB_HOST=your-mysql-host
   DB_USER=your-mysql-user
   DB_PASSWORD=your-mysql-password
   DB_NAME=docnow
   DB_PORT=3306
   ```
6. **Deploy** - Railway will automatically build and deploy
7. **Copy the URL** (e.g., `https://your-app.railway.app`)

### **Step 3: Deploy Frontend to Vercel**

1. **Go to [Vercel.com](https://vercel.com)**
2. **Sign up/Login** with GitHub
3. **Import Project** → Select your repository
4. **Configure Project**:
   - **Framework Preset**: Create React App
   - **Root Directory**: `docnowadmission`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. **Add Environment Variable**:
   ```
   REACT_APP_API_URL=https://your-app.railway.app
   ```
6. **Deploy** - Vercel will build and deploy your React app

### **Step 4: Set Up Database**

**Option A: Railway MySQL (Recommended)**
1. In Railway dashboard, add MySQL plugin
2. Copy connection details to environment variables
3. Run the setup script in Railway's console

**Option B: PlanetScale (Alternative)**
1. Go to [PlanetScale.com](https://planetscale.com)
2. Create database and get connection string
3. Update Railway environment variables

## 🌐 Alternative Hosting Options

### **Option 1: DigitalOcean App Platform**
- **Cost**: $5-12/month
- **Pros**: All-in-one, easy scaling
- **Cons**: More expensive

**Steps:**
1. Create DigitalOcean account
2. Create App Platform project
3. Connect GitHub repository
4. Configure frontend and backend services
5. Add MySQL database

### **Option 2: Heroku**
- **Cost**: $7-25/month
- **Pros**: Well-established, good docs
- **Cons**: No free tier, expensive

**Steps:**
1. Create Heroku account
2. Install Heroku CLI
3. Deploy backend: `heroku create your-app-name`
4. Deploy frontend: `heroku create your-frontend-name`
5. Add MySQL addon

### **Option 3: AWS (Advanced)**
- **Cost**: $5-20/month
- **Pros**: Highly scalable, reliable
- **Cons**: Complex setup

**Services to use:**
- Frontend: AWS S3 + CloudFront
- Backend: AWS EC2 or Lambda
- Database: AWS RDS (MySQL)

## 🔧 Post-Deployment Checklist

### **1. Domain Setup**
- **Buy domain** (GoDaddy, Namecheap, etc.)
- **Configure DNS** to point to your hosting
- **Set up SSL** (automatic with Vercel/Railway)

### **2. Environment Variables**
**Frontend (Vercel):**
```
REACT_APP_API_URL=https://your-backend-url.com
```

**Backend (Railway):**
```
DB_HOST=your-db-host
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=docnow
DB_PORT=3306
```

### **3. Security**
- ✅ Change default passwords
- ✅ Use strong database passwords
- ✅ Enable HTTPS (automatic with Vercel/Railway)
- ✅ Set up proper CORS (already done)

### **4. Monitoring**
- **Vercel Analytics** (free)
- **Railway Metrics** (included)
- **Error tracking** (Sentry - optional)

## 💰 Cost Comparison

| Service | Frontend | Backend | Database | Total/Month |
|---------|----------|---------|----------|-------------|
| **Vercel + Railway** | Free | $5-10 | $5-10 | **$10-20** |
| **DigitalOcean** | $5 | $5 | $5 | **$15** |
| **Heroku** | $7 | $7 | $5 | **$19** |
| **AWS** | $5 | $10 | $10 | **$25** |

## 🚨 Troubleshooting

### **Common Issues:**

1. **CORS Errors**
   - Check if backend URL is correct in frontend
   - Verify CORS headers in backend

2. **Database Connection Failed**
   - Check environment variables
   - Verify database is running
   - Test connection locally

3. **Build Failures**
   - Check for missing dependencies
   - Verify Node.js version
   - Check build logs

4. **Domain Not Working**
   - Check DNS settings
   - Wait for DNS propagation (up to 48 hours)
   - Verify SSL certificate

## 📞 Support

- **Vercel**: Excellent documentation and support
- **Railway**: Good Discord community
- **DigitalOcean**: Comprehensive tutorials
- **Heroku**: Extensive documentation

## 🎉 Success!

Once deployed, your website will be live at:
- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://your-app.railway.app`

Your DocNow admission website is now live and ready to accept enquiries from real users! 🚀 