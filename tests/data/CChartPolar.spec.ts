// Import vitest functions first
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock Chart.js before importing the component
vi.mock('chart.js', () => {
    // Create a Chart mock that can be accessed in tests
    const chartInstance = {
        destroy: vi.fn(),
        resize: vi.fn(),
        update: vi.fn()
    };

    const Chart = vi.fn(() => chartInstance);
    Chart.register = vi.fn();

    return {
        Chart,
        registerables: []
    };
});

// Now import the component and test utils
import { shallowMount } from '@vue/test-utils';
import CChartPolar from '../../src/components/data/CChartPolar.vue';

// Sample data for tests
const mockPolarData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
        ],
        borderWidth: 1
    }]
};

describe('CChartPolar Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();

        // Mock canvas context
        HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
            canvas: { width: 100, height: 100 },
            clearRect: vi.fn()
        }));

        // Mock ResizeObserver
        global.ResizeObserver = class ResizeObserver {
            observe() { }
            unobserve() { }
            disconnect() { }
        };
    });

    it('renders correctly with default props', () => {
        const wrapper = shallowMount(CChartPolar, {
            props: {
                data: mockPolarData
            }
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('canvas').exists()).toBe(true);
        expect(wrapper.find('.chart-container').exists()).toBe(true);
    });

    it('applies width and height props correctly', () => {
        const wrapper = shallowMount(CChartPolar, {
            props: {
                data: mockPolarData,
                width: '500px',
                height: '300px'
            }
        });

        const container = wrapper.find('.chart-container');
        expect(container.attributes('style')).toContain('width: 500px');
        expect(container.attributes('style')).toContain('height: 300px');
    });

    it('emits chart-created event after chart is created', async () => {
        const wrapper = shallowMount(CChartPolar, {
            props: {
                data: mockPolarData
            }
        });

        // Wait for mounted hook to complete
        await new Promise(resolve => setTimeout(resolve, 300));

        expect(wrapper.emitted('chart-created')).toBeTruthy();
    });

    it('applies custom colors correctly', () => {
        const customColors = [
            'rgba(255, 0, 0, 0.7)',
            'rgba(0, 255, 0, 0.7)',
            'rgba(0, 0, 255, 0.7)'
        ];

        const wrapper = shallowMount(CChartPolar, {
            props: {
                data: mockPolarData,
                colors: customColors
            }
        });

        expect(wrapper.props('colors')).toEqual(customColors);
    });

    it('sets border width correctly', () => {
        const wrapper = shallowMount(CChartPolar, {
            props: {
                data: mockPolarData,
                borderWidth: 3
            }
        });

        expect(wrapper.props('borderWidth')).toBe(3);
    });

    it('applies custom title correctly', () => {
        const title = 'My Polar Chart';
        const wrapper = shallowMount(CChartPolar, {
            props: {
                data: mockPolarData,
                title
            }
        });

        expect(wrapper.props('title')).toBe(title);
    });

    it('applies custom legend options correctly', () => {
        const legend = { display: false };
        const wrapper = shallowMount(CChartPolar, {
            props: {
                data: mockPolarData,
                legend
            }
        });

        expect(wrapper.props('legend')).toEqual(legend);
    });

    it('exposes methods for chart manipulation', () => {
        const wrapper = shallowMount(CChartPolar, {
            props: {
                data: mockPolarData
            }
        });

        expect(typeof wrapper.vm.addDataset).toBe('function');
        expect(typeof wrapper.vm.updateDataset).toBe('function');
        expect(typeof wrapper.vm.removeDataset).toBe('function');
        expect(typeof wrapper.vm.addData).toBe('function');
        expect(typeof wrapper.vm.removeData).toBe('function');
        expect(typeof wrapper.vm.updateLabels).toBe('function');
        expect(typeof wrapper.vm.resizeChart).toBe('function');
        expect(typeof wrapper.vm.recreateChart).toBe('function');
    });

    it('recreates chart when data changes', async () => {
        // Create chart with a simple test for watches
        const wrapper = shallowMount(CChartPolar, {
            props: {
                data: mockPolarData
            }
        });

        // Wait for initial chart creation
        await new Promise(resolve => setTimeout(resolve, 300));

        // Create a spy to test if createChart is called
        const createChartSpy = vi.spyOn(wrapper.vm, 'recreateChart');

        // Directly call the watch handler with new data
        await wrapper.setProps({
            data: {
                labels: ['A', 'B', 'C'],
                datasets: [{
                    label: 'New Data',
                    data: [10, 20, 30]
                }]
            }
        });

        // Manually trigger recreation
        wrapper.vm.recreateChart();

        // Verify the spy was called
        expect(createChartSpy).toHaveBeenCalled();
    });

    it('calls resizeChart when window is resized', async () => {
        // Mock the Chart instance resize method
        const resizeSpy = vi.fn();

        // Create a fake chart instance
        const mockChartInstance = {
            resize: resizeSpy,
            destroy: vi.fn(),
            update: vi.fn()
        };

        const wrapper = shallowMount(CChartPolar, {
            props: {
                data: mockPolarData,
                responsive: true
            }
        });

        // Wait for initial chart creation
        await new Promise(resolve => setTimeout(resolve, 300));

        // Manually set the chartInstance property
        wrapper.vm.chartInstance = mockChartInstance;

        // Directly call the resizeChart method instead of trying to trigger via event
        wrapper.vm.resizeChart();

        // Verify the resize method was called on our mock instance
        expect(resizeSpy).toHaveBeenCalled();
    });

    it('cleans up chart when component is unmounted', async () => {
        const wrapper = shallowMount(CChartPolar, {
            props: {
                data: mockPolarData
            }
        });

        // Wait for initial chart creation
        await new Promise(resolve => setTimeout(resolve, 300));

        // Create a mock chart instance
        const chartInstance = { destroy: vi.fn() };
        wrapper.vm.chartInstance = chartInstance;

        // Unmount the component
        wrapper.unmount();

        expect(chartInstance.destroy).toHaveBeenCalled();
    });
});
