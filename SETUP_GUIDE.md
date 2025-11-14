# 🚀 Quick Setup Guide

## Prerequisites Checklist

- [ ] Android Studio Electric Eel or newer installed
- [ ] Android NDK 25.0+ configured
- [ ] OpenCV Android SDK 4.8.0 downloaded
- [ ] Node.js 18+ installed
- [ ] Android device with USB debugging enabled
- [ ] Git installed

## Step-by-Step Setup (30 minutes)

### 1. Download OpenCV Android SDK (5 mins)

```bash
# Visit: https://opencv.org/releases/
# Download: opencv-4.8.0-android-sdk.zip
# Extract to: ~/opencv-android-sdk/

# Verify extraction
ls ~/opencv-android-sdk/sdk/native/jni
# Should see: abi-* folders
```

### 2. Open Project in Android Studio (5 mins)

```bash
# Open Android Studio
# File → Open → Select EdgeDetectionApp folder
# Wait for Gradle sync to complete
```

### 3. Import OpenCV Module (5 mins)

```bash
# In Android Studio:
# File → New → Import Module
# Source directory: ~/opencv-android-sdk/sdk
# Module name: opencv
# Click Finish
# Wait for sync
```

### 4. Update CMakeLists.txt (2 mins)

```bash
# Edit: app/src/main/cpp/CMakeLists.txt
# Line 6: Update OpenCV path

# macOS/Linux:
set(OpenCV_DIR /Users/YOUR_USERNAME/opencv-android-sdk/sdk/native/jni)

# Windows:
set(OpenCV_DIR C:/opencv-android-sdk/sdk/native/jni)
```

### 5. Sync and Build (5 mins)

```bash
# In Android Studio:
# File → Sync Project with Gradle Files
# Build → Make Project
# Wait 2-3 minutes for first build
```

### 6. Connect Device and Run (3 mins)

```bash
# Connect Android device via USB
# Enable Developer Options → USB Debugging
# Click Run → Run 'app'
# Grant camera permission when prompted
```

### 7. Setup Web Viewer (5 mins)

```bash
cd web
npm install
npm run build
npm start

# Open browser: http://localhost:8080
```

## Troubleshooting

### Build Error: OpenCV not found

**Solution:**
```bash
# Check OpenCV path in CMakeLists.txt
# Use absolute path, not relative
# Example: /Users/john/opencv-android-sdk/sdk/native/jni
```

### Error: NDK not configured

**Solution:**
```bash
# Android Studio → File → Project Structure
# SDK Location → Android NDK location
# Click Download NDK if not installed
```

### Camera Permission Denied

**Solution:**
```bash
# Device Settings → Apps → EdgeDetectionApp
# Permissions → Camera → Allow
```

### Low FPS on Device

**Solution:**
```bash
# Use Release build instead of Debug
# Build → Select Build Variant → release
```

### TypeScript Build Errors

**Solution:**
```bash
cd web
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Verification Checklist

- [ ] App builds without errors
- [ ] Camera preview shows on device
- [ ] Edge detection processes frames
- [ ] FPS counter shows 15+ FPS
- [ ] Toggle button switches modes
- [ ] Web viewer displays frames at http://localhost:8080
- [ ] Git commits show proper history

## Next Steps

1. Test on device
2. Take screenshots
3. Update README.md with your info
4. Commit to GitHub
5. Submit project link

## Time Estimate

Total setup time: ~30 minutes
Development time: ~6 hours
Total: ~6.5 hours
