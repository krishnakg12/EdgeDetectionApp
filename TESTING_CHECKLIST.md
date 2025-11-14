# Testing Checklist

## Before Submission

### Build Verification

- [ ] Project builds without errors
- [ ] No Gradle sync issues
- [ ] CMake configures successfully
- [ ] Native libraries compile
- [ ] APK generation successful

### Android App Testing

- [ ] App installs on device
- [ ] Camera permission request appears
- [ ] Camera preview displays correctly
- [ ] Edge detection processes frames
- [ ] FPS counter shows 15+ FPS
- [ ] Toggle button switches between modes
- [ ] No crashes during operation
- [ ] App survives screen rotation
- [ ] Memory usage stays under 100MB

### JNI Integration (25% Weight)

- [ ] Native methods load successfully
- [ ] Frame data transfers to C++
- [ ] Return values handled correctly
- [ ] No JNI crashes or errors
- [ ] Proper error handling
- [ ] Logging shows correct operation

### OpenCV Processing (20% Weight)

- [ ] Canny edge detection works
- [ ] Grayscale filter functions
- [ ] Processing completes in <60ms
- [ ] Output images are correct
- [ ] No memory leaks
- [ ] Edge quality is good

### OpenGL Rendering (20% Weight)

- [ ] Textures render correctly
- [ ] No visual artifacts
- [ ] Smooth frame rendering
- [ ] Proper aspect ratio
- [ ] 60 FPS display rate
- [ ] No GL errors in logs

### TypeScript Viewer (20% Weight)

- [ ] TypeScript compiles without errors
- [ ] Web page loads correctly
- [ ] Canvas displays frames
- [ ] FPS counter updates
- [ ] Resolution shows correctly
- [ ] Stats display properly
- [ ] Responsive design works
- [ ] No console errors

### Documentation (15% Weight)

- [ ] README is comprehensive
- [ ] Setup instructions are clear
- [ ] Architecture is explained
- [ ] Screenshots included
- [ ] Tech stack documented
- [ ] Performance metrics listed
- [ ] Troubleshooting section complete

### Git Repository

- [ ] 10+ meaningful commits
- [ ] Proper commit history
- [ ] No single final dump
- [ ] Repository is public/shared
- [ ] .gitignore configured
- [ ] No large binary files

## Performance Benchmarks

### Target Metrics

| Metric | Target | Your Result |
|--------|--------|-------------|
| FPS | 15-25 | _____ |
| Processing Time | <60ms | _____ |
| Memory Usage | <100MB | _____ |
| App Size | <50MB | _____ |
| Build Time | <5min | _____ |

### Test Scenarios

1. **Low Light**: Edge detection works in dim conditions
2. **High Motion**: No lag with fast movement
3. **Extended Use**: No memory leaks after 5 minutes
4. **Rotation**: UI adapts correctly
5. **Background**: App handles pause/resume

## Device Testing

### Minimum Requirements

- Android 7.0 (API 24)
- 2GB RAM
- Camera support
- OpenGL ES 2.0

### Tested Devices

- [ ] Device 1: _____________
- [ ] Device 2: _____________

## Pre-Submission Final Check

```bash
# Clean build
./gradlew clean
./gradlew assembleDebug

# Check APK size
ls -lh app/build/outputs/apk/debug/app-debug.apk

# Verify web build
cd web && npm run build

# Check git status
git status
git log --oneline

# Count commits
git rev-list --count HEAD
# Should be 10+
```

## Submission Checklist

- [ ] All tests passed
- [ ] Performance meets targets
- [ ] Documentation complete
- [ ] Git history proper
- [ ] Repository accessible
- [ ] Screenshots added
- [ ] README has all sections
- [ ] Code is commented
- [ ] No TODO or FIXME left
- [ ] Assignment PDF reviewed

## Sign Off

Tested by: _______________
Date: _______________
Ready for submission: [ ]
