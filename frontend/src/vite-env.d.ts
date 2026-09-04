declare module '@novnc/novnc' {
  export default class RFB {
    constructor(target: HTMLElement, wsUrl: string, options?: object);
    scaleViewport: boolean;
    resizeSession: boolean;
    showDotCursor: boolean;
    addEventListener(event: string, handler: (e: any) => void): void;
    removeEventListener(event: string, handler: (e: any) => void): void;
    disconnect(): void;
    sendKey(key: number, keyName?: string, down?: boolean): void;
  }
}