import { vi } from 'vitest/dist/index';

// Mock for monaco editor workers
const workerMock = {
    postMessage: vi.fn(),
    addEventListener: vi.fn()
};

export default workerMock;
