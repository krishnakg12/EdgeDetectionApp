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
declare class EdgeDetectionViewer {
    private canvas;
    private ctx;
    private fpsElement;
    private resolutionElement;
    private statusElement;
    private processingTimeElement;
    private frameCountElement;
    private stats;
    constructor();
    private initialize;
    private loadMockFrame;
    private generateRandomFps;
    private generateRandomProcessingTime;
    private generateMockEdgeImage;
    private displayFrame;
    private updateStats;
}
declare const bootstrapViewer: () => void;
