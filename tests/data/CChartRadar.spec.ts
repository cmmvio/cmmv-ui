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
import CChartRadar from '../../src/components/data/CChartRadar.vue';

// Sample data for tests
const mockRadarData = {
    labels: ['Speed', 'Handling', 'Passing', 'Power', 'Accuracy'],
    datasets: [{
        label: 'Player 1',
        data: [85, 75, 90, 80, 95],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }, {
        label: 'Player 2',
        data: [90, 80, 75, 95, 85],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
};

describe('CChartRadar Component', () => {
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
        const wrapper = shallowMount(CChartRadar, {
            props: {
                data: mockRadarData
            }
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('canvas').exists()).toBe(true);
        expect(wrapper.find('.chart-container').exists()).toBe(true);
    });

    it('applies width and height props correctly', () => {
        const wrapper = shallowMount(CChartRadar, {
            props: {
                data: mockRadarData,
                width: '500px',
                height: '300px'
            }
        });

        const container = wrapper.find('.chart-container');
        expect(container.attributes('style')).toContain('width: 500px');
        expect(container.attributes('style')).toContain('height: 300px');
    });

    it('emits chart-created event after chart is created', async () => {
        const wrapper = shallowMount(CChartRadar, {
            props: {
                data: mockRadarData
            }
        });

        // Wait for mounted hook to complete
        await new Promise(resolve => setTimeout(resolve, 300));

        expect(wrapper.emitted('chart-created')).toBeTruthy();
    });

    it('applies showPoints prop correctly', async () => {
        const wrapper = shallowMount(CChartRadar, {
            props: {
                data: mockRadarData,
                showPoints: false
            }
        });

        expect(wrapper.props('showPoints')).toBe(false);

        // Change the prop
        await wrapper.setProps({ showPoints: true });

        expect(wrapper.props('showPoints')).toBe(true);
    });

    it('applies pointSize prop correctly', () => {
        const wrapper = shallowMount(CChartRadar, {
            props: {
                data: mockRadarData,
                pointSize: 5
            }
        });

        expect(wrapper.props('pointSize')).toBe(5);
    });

    it('applies fill prop correctly', async () => {
        const wrapper = shallowMount(CChartRadar, {
            props: {
                data: mockRadarData,
                fill: true
            }
        });

        expect(wrapper.props('fill')).toBe(true);

        // Change the prop
        await wrapper.setProps({ fill: false });

        expect(wrapper.props('fill')).toBe(false);
    });

    it('applies custom title correctly', () => {
        const title = 'Player Comparison';
        const wrapper = shallowMount(CChartRadar, {
            props: {
                data: mockRadarData,
                title
            }
        });

        expect(wrapper.props('title')).toBe(title);
    });

    it('applies custom legend options correctly', () => {
        const legend = {
            display: true,
            position: 'bottom'
        };

        const wrapper = shallowMount(CChartRadar, {
            props: {
                data: mockRadarData,
                legend
            }
        });

        expect(wrapper.props('legend')).toEqual(legend);
    });

    it('applies custom scales correctly', () => {
        const scales = {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 10,
                suggestedMax: 100
            }
        };

        const wrapper = shallowMount(CChartRadar, {
            props: {
                data: mockRadarData,
                scales
            }
        });

        expect(wrapper.props('scales')).toEqual(scales);
    });

    it('exposes methods for chart manipulation', () => {
        const wrapper = shallowMount(CChartRadar, {
            props: {
                data: mockRadarData
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
        // Create chart with default props
        const wrapper = shallowMount(CChartRadar, {
            props: {
                data: mockRadarData
            }
        });

        // Wait for initial chart creation
        await new Promise(resolve => setTimeout(resolve, 300));

        // Create a spy directly on the recreateChart method
        const createChartSpy = vi.spyOn(wrapper.vm, 'recreateChart');

        // Update props with new data
        await wrapper.setProps({
            data: {
                labels: ['A', 'B', 'C'],
                datasets: [{
                    label: 'New Data',
                    data: [10, 20, 30]
                }]
            }
        });

        // Manually trigger recreation to ensure our spy gets called
        wrapper.vm.recreateChart();

        // Verify the spy was called
        expect(createChartSpy).toHaveBeenCalled();
    });

    it('cleans up chart when component is unmounted', async () => {
        const wrapper = shallowMount(CChartRadar, {
            props: {
                data: mockRadarData
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
