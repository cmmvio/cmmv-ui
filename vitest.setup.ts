import { vi } from 'vitest';

// Função auxiliar para criar o mock do Chart
function createChartMock() {
    // Cria um mock para a instância do Chart
    const chartInstance = {
        destroy: vi.fn(),
        resize: vi.fn(),
        resetZoom: vi.fn(),
        update: vi.fn()
    };

    // Cria o constructor do Chart com método register
    const ChartConstructor = vi.fn(() => chartInstance);
    ChartConstructor.register = vi.fn();

    return {
        Chart: ChartConstructor,
        registerables: []
    };
}

// Aplica o mock do Chart.js
const chartJsMock = createChartMock();
vi.mock('chart.js', () => ({
    __esModule: true,
    Chart: chartJsMock.Chart,
    registerables: chartJsMock.registerables
}));

// Define globalmente para que os testes possam acessar
global.__chartJsMock = chartJsMock;

// Mock para o ResizeObserver
global.ResizeObserver = class ResizeObserver {
    callback;
    constructor(callback) {
        this.callback = callback;
    }
    observe() { }
    unobserve() { }
    disconnect() { }
};

// Mock para requestAnimationFrame
global.requestAnimationFrame = (callback) => {
    return setTimeout(callback, 0);
};

// Mock para elementos de imagem no ambiente de teste
class MockImage {
    src = '';
    width = 0;
    height = 0;
    complete = false;
    naturalWidth = 0;
    naturalHeight = 0;

    // Event handlers
    onload = null;
    onerror = null;

    // Event dispatcher
    dispatchEvent(event) {
        if (event.type === 'load' && typeof this.onload === 'function') {
            this.onload(event);
        }
        if (event.type === 'error' && typeof this.onerror === 'function') {
            this.onerror(event);
        }
        return true;
    }

    // Para simular carregamento
    _simulateLoad() {
        this.complete = true;
        this.naturalWidth = 100;
        this.naturalHeight = 100;
        this.dispatchEvent(new Event('load'));
    }

    // Para simular erro
    _simulateError() {
        this.complete = true;
        this.dispatchEvent(new Event('error'));
    }

    // Para compatibilidade com testes existentes
    addEventListener(event, callback) {
        if (event === 'load') {
            this.onload = callback;
        } else if (event === 'error') {
            this.onerror = callback;
        }
    }

    removeEventListener() { }
}

// Substituir a implementação global de Image
global.Image = MockImage;

// Se necessário, adicione mocks para outros objetos do navegador

// Mock URL methods used for workers
window.URL.createObjectURL = vi.fn(() => 'mock-url');
window.URL.revokeObjectURL = vi.fn();

// Mock the Worker constructor
global.Worker = class {
    constructor() {
        return {
            postMessage: vi.fn(),
            addEventListener: vi.fn(),
            terminate: vi.fn()
        };
    }
};

// Define Monaco environment
window.MonacoEnvironment = {
    getWorker: () => ({ postMessage: vi.fn(), addEventListener: vi.fn() })
};

// Mock ResizeObserver
window.ResizeObserver = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn()
}));

// Mock MutationObserver
window.MutationObserver = vi.fn(() => ({
    observe: vi.fn(),
    disconnect: vi.fn()
}));

// Mock clipboard API
Object.assign(navigator, {
    clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined)
    }
});
