# Git Workflow Guide

## Important: Proper Git History Required

The assignment **requires proper version control**. A single final commit will result in submission rejection.

## Recommended Commit Sequence

### Initial Setup (Day 1)

```bash
git init
git add README.md .gitignore
git commit -m "Initial commit: Project setup"

git add settings.gradle build.gradle gradle.properties
git commit -m "feat: Add Gradle build configuration"

git add app/build.gradle app/src/main/AndroidManifest.xml
git commit -m "feat: Setup Android application structure"
```

### OpenCV Integration (Day 1)

```bash
git add app/src/main/cpp/CMakeLists.txt
git commit -m "feat: Configure CMake for OpenCV integration"

git add app/src/main/java/com/edgedetection/app/NativeProcessor.kt
git commit -m "feat: Add JNI native processor interface"
```

### Core Implementation (Day 2)

```bash
git add app/src/main/cpp/native-lib.cpp
git commit -m "feat: Implement Canny edge detection in C++"

git add app/src/main/cpp/EdgeProcessor.cpp
git commit -m "feat: Add advanced edge processing algorithms"

git add app/src/main/cpp/GLRenderer.cpp
git commit -m "feat: Implement OpenGL ES texture rendering"
```

### Android UI (Day 2)

```bash
git add app/src/main/java/com/edgedetection/app/MainActivity.kt
git commit -m "feat: Implement camera capture with CameraX"

git add app/src/main/java/com/edgedetection/app/FrameAnalyzer.kt
git commit -m "feat: Add real-time frame analysis pipeline"

git add app/src/main/res/layout/activity_main.xml
git commit -m "feat: Design UI with camera preview and controls"
```

### Web Viewer (Day 3)

```bash
git add web/package.json web/tsconfig.json
git commit -m "feat: Initialize TypeScript project structure"

git add web/src/index.ts
git commit -m "feat: Implement TypeScript frame viewer logic"

git add web/src/index.html
git commit -m "feat: Design web viewer UI with stats display"
```

### Documentation (Day 3)

```bash
git add README.md SETUP_GUIDE.md
git commit -m "docs: Add comprehensive documentation"

git add screenshots/
git commit -m "docs: Add application screenshots"
```

### Final Polish

```bash
git add .
git commit -m "fix: Optimize performance and handle edge cases"

git commit -m "chore: Final cleanup and code formatting"
```

## Push to GitHub

```bash
# Create repository on GitHub (don't initialize with README)
git remote add origin https://github.com/YOUR_USERNAME/EdgeDetectionApp.git
git branch -M main
git push -u origin main
```

## Verify Commit History

```bash
# Check commits
git log --oneline

# Should show 10-15 commits across different components
# NOT a single "final commit"
```

## Dos and Don'ts

### ✅ Do

- Make small, focused commits
- Write clear commit messages
- Commit after completing each feature
- Push commits incrementally
- Show development progression

### ❌ Don't

- Make one giant commit at the end
- Use vague messages like "update"
- Commit binary files (APKs, .so files)
- Forget to push to remote repository
- Include sensitive information

## Commit Message Format

```bash
# Good
feat: Add Canny edge detection in C++
fix: Resolve camera permission crash
docs: Update README with setup instructions

# Bad
update
changes
final version
```

## Pre-Submission Checklist

- [ ] 10+ commits with meaningful messages
- [ ] Commits show incremental development
- [ ] All code pushed to GitHub
- [ ] Repository is public or shared with evaluators
- [ ] README has GitHub repository link
