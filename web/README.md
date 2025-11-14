# TypeScript Web Viewer

Real-time frame viewer for edge detection results.

## Setup

```bash
npm install
npm run build
npm start
```

Open browser: http://localhost:8080

## Features

- TypeScript with strict mode
- Real-time FPS display
- Canvas-based rendering
- Responsive design
- Frame statistics

## Architecture

The viewer displays mock processed frames demonstrating edge detection results. 
In production, it would connect to the Android app via WebSocket or HTTP endpoint.
