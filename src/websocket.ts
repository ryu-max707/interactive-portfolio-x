// Stub WebSocket pour éviter les erreurs HMR WebSocket en prod ou si mauvaise config
import { createWebSocket } from './websocket';
class FakeWebSocket {
  constructor(url) {
    console.warn(`[FakeWebSocket] Ignored connection attempt to: ${url}`);
    this.url = url;
    this.readyState = 1; // OPEN
  }
  addEventListener() {}
  removeEventListener() {}
  close() {}
  send() {}
  onopen() {}
  onmessage() {}
  onerror() {}
  onclose() {}
}

export function createWebSocket(url) {
  // Ici, tu peux décider de retourner une vraie WebSocket si en dev, 
  // ou un FakeWebSocket en prod ou selon le paramètre url
  if (typeof window !== 'undefined' && url && url.startsWith('ws://localhost')) {
    return new WebSocket(url); // vraie WebSocket pour dev local
  } else {
    return new FakeWebSocket(url); // stub en prod ou mauvaise url
  }
}
