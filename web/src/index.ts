/**
 * Edge Detection Frame Viewer
 * TypeScript implementation for displaying processed frames
 */

interface FrameData {
  width: number;
  height: number;
  fps: number;
  timestamp: number;
  imageData: string;
  processingTime?: number;
}

interface FrameStats {
  totalFrames: number;
  avgFps: number;
  avgProcessingTime: number;
  resolution: string;
}

class EdgeDetectionViewer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private fpsElement: HTMLElement;
  private resolutionElement: HTMLElement;
  private statusElement: HTMLElement;
  private processingTimeElement: HTMLElement | null;
  private frameCountElement: HTMLElement | null;

  private stats: FrameStats = {
    totalFrames: 0,
    avgFps: 0,
    avgProcessingTime: 0,
    resolution: '0x0'
  };

  constructor() {
    this.canvas = document.getElementById('frameCanvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.fpsElement = document.getElementById('fps')!;
    this.resolutionElement = document.getElementById('resolution')!;
    this.statusElement = document.getElementById('status')!;
    this.processingTimeElement = document.getElementById('processingTime');
    this.frameCountElement = document.getElementById('frameCount');

    if (!this.canvas || !this.ctx) {
      console.error('Canvas not found or context not available');
      return;
    }

    this.initialize();
  }

  private initialize(): void {
    console.log('Edge Detection Viewer initialized');
    this.loadMockFrame();
    this.updateStats();

    // Simulate frame updates every 2 seconds
    setInterval(() => {
      this.loadMockFrame();
    }, 2000);
  }

  private loadMockFrame(): void {
    const mockFrame: FrameData = {
      width: 1920,
      height: 1080,
      fps: this.generateRandomFps(),
      timestamp: Date.now(),
      imageData: this.generateMockEdgeImage(),
      processingTime: this.generateRandomProcessingTime()
    };

    this.stats.totalFrames++;
    this.stats.avgFps = Math.round((this.stats.avgFps + mockFrame.fps) / 2);
    this.stats.resolution = `${mockFrame.width}x${mockFrame.height}`;

    if (mockFrame.processingTime) {
      this.stats.avgProcessingTime = Math.round(
        (this.stats.avgProcessingTime + mockFrame.processingTime) / 2
      );
    }

    this.displayFrame(mockFrame);
    this.updateStats();
  }

  private generateRandomFps(): number {
    return Math.floor(Math.random() * 8) + 15; // 15-22 FPS
  }

  private generateRandomProcessingTime(): number {
    return Math.floor(Math.random() * 20) + 40; // 40-60 ms
  }

  private generateMockEdgeImage(): string {
    const tempCanvas = document.createElement('canvas');
    const targetWidth = 640;
    const targetHeight = 480;
    tempCanvas.width = targetWidth;
    tempCanvas.height = targetHeight;
    const tempCtx = tempCanvas.getContext('2d')!;

    // Black background
    tempCtx.fillStyle = '#000000';
    tempCtx.fillRect(0, 0, targetWidth, targetHeight);

    // Draw random edge patterns
    tempCtx.strokeStyle = '#FFFFFF';
    tempCtx.lineWidth = 2;

    // Draw some geometric shapes with edges
    for (let i = 0; i < 15; i++) {
      const x = Math.random() * targetWidth;
      const y = Math.random() * targetHeight;
      const radius = Math.random() * 50 + 20;

      tempCtx.beginPath();
      tempCtx.arc(x, y, radius, 0, Math.PI * 2);
      tempCtx.stroke();
    }

    // Draw random lines
    for (let i = 0; i < 25; i++) {
      tempCtx.beginPath();
      tempCtx.moveTo(Math.random() * targetWidth, Math.random() * targetHeight);
      tempCtx.lineTo(Math.random() * targetWidth, Math.random() * targetHeight);
      tempCtx.stroke();
    }

    // Draw rectangles
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * targetWidth;
      const y = Math.random() * targetHeight;
      const w = Math.random() * 100 + 30;
      const h = Math.random() * 100 + 30;

      tempCtx.strokeRect(x, y, w, h);
    }

    return tempCanvas.toDataURL('image/png');
  }

  private displayFrame(frame: FrameData): void {
    const img = new Image();

    img.onload = () => {
      // Update canvas size
      this.canvas.width = frame.width / 2; // Scale down for display
      this.canvas.height = frame.height / 2;

      // Draw image
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);

      // Update stats display
      this.fpsElement.textContent = `${frame.fps}`;
      this.resolutionElement.textContent = `${frame.width}x${frame.height}`;

      if (this.processingTimeElement && frame.processingTime) {
        this.processingTimeElement.textContent = `${frame.processingTime}ms`;
      }

      console.log(`Frame displayed: ${frame.width}x${frame.height} @ ${frame.fps} FPS`);
    };

    img.onerror = () => {
      console.error('Failed to load frame image');
    };

    img.src = frame.imageData;
  }

  private updateStats(): void {
    if (this.frameCountElement) {
      this.frameCountElement.textContent = this.stats.totalFrames.toString();
    }

    this.statusElement.textContent = this.stats.totalFrames > 0 ? 'Active' : 'Inactive';
    console.log('Stats updated:', this.stats);
  }
}

// Initialize viewer once DOM is ready (covers cached load scenarios)
const bootstrapViewer = () => {
  console.log('Bootstrapping Edge Detection Viewer');
  new EdgeDetectionViewer();
};

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', bootstrapViewer);
} else {
  bootstrapViewer();
}
