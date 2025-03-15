import { shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import CChartLine from '../../src/components/data/CChartLine.vue';

// Mock Chart.js
vi.mock('chart.js', () => {
    const chartInstance = {
        destroy: vi.fn(),
        resize: vi.fn(),
        resetZoom: vi.fn()
    };

    // Create constructor function with static register method
    const ChartMock = vi.fn(() => chartInstance);
    ChartMock.register = vi.fn();

    return {
        Chart: ChartMock,
        registerables: []
    };
});

// Sample data for line chart
const mockLineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Sales 2023',
            data: [65, 59, 80, 81, 56],
            borderColor: 'rgb(75, 192, 192)'
        }
    ]
};

describe('CChartLine Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();

        // Mock for canvas context
        HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
            canvas: { width: 100, height: 100 }
        }));
    });

    it('renders correctly with default props', () => {
        const wrapper = shallowMount(CChartLine, {
            props: {
                data: mockLineData
            }
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('canvas').exists()).toBe(true);
        expect(wrapper.find('.chart-container').exists()).toBe(true);
    });

    it('correctly applies width and height props', () => {
        const wrapper = shallowMount(CChartLine, {
            props: {
                data: mockLineData,
                width: '800px',
                height: '400px'
            }
        });

        const container = wrapper.find('.chart-container');
        expect(container.attributes('style')).toContain('width: 800px');
        expect(container.attributes('style')).toContain('height: 400px');
    });

    it('supports different line types', () => {
        // Straight line (default)
        const straightLineWrapper = shallowMount(CChartLine, {
            props: {
                data: mockLineData,
                lineType: 'straight'
            }
        });

        expect(straightLineWrapper.props('lineType')).toBe('straight');

        // Curved line
        const curvedLineWrapper = shallowMount(CChartLine, {
            props: {
                data: mockLineData,
                lineType: 'curved'
            }
        });

        expect(curvedLineWrapper.props('lineType')).toBe('curved');

        // Stepped line
        const steppedLineWrapper = shallowMount(CChartLine, {
            props: {
                data: mockLineData,
                lineType: 'stepped'
            }
        });

        expect(steppedLineWrapper.props('lineType')).toBe('stepped');
    });

    it('allows controlling point display in chart', () => {
        // With points (default)
        const withPointsWrapper = shallowMount(CChartLine, {
            props: {
                data: mockLineData,
                showPoints: true
            }
        });

        expect(withPointsWrapper.props('showPoints')).toBe(true);

        // Without points
        const withoutPointsWrapper = shallowMount(CChartLine, {
            props: {
                data: mockLineData,
                showPoints: false
            }
        });

        expect(withoutPointsWrapper.props('showPoints')).toBe(false);
    });

    it('allows filling area below the line', () => {
        // Without fill (default)
        const noFillWrapper = shallowMount(CChartLine, {
            props: {
                data: mockLineData,
                fill: false
            }
        });

        expect(noFillWrapper.props('fill')).toBe(false);

        // With fill
        const fillWrapper = shallowMount(CChartLine, {
            props: {
                data: mockLineData,
                fill: true
            }
        });

        expect(fillWrapper.props('fill')).toBe(true);
    });

    it('allows customizing point size', () => {
        const wrapper = shallowMount(CChartLine, {
            props: {
                data: mockLineData,
                pointSize: 5
            }
        });

        expect(wrapper.props('pointSize')).toBe(5);
    });

    it('exposes methods for chart manipulation', () => {
        const wrapper = shallowMount(CChartLine, {
            props: {
                data: mockLineData
            }
        });

        // Check exposed methods
        expect(typeof wrapper.vm.addDataset).toBe('function');
        expect(typeof wrapper.vm.updateDataset).toBe('function');
        expect(typeof wrapper.vm.removeDataset).toBe('function');
        expect(typeof wrapper.vm.addData).toBe('function');
        expect(typeof wrapper.vm.removeData).toBe('function');
        expect(typeof wrapper.vm.updateLabels).toBe('function');
        expect(typeof wrapper.vm.resizeChart).toBe('function');
        expect(typeof wrapper.vm.recreateChart).toBe('function');
    });

    it('allows custom colors', () => {
        const customColors = [
            'rgba(255, 0, 0, 0.8)',
            'rgba(0, 255, 0, 0.8)',
            'rgba(0, 0, 255, 0.8)'
        ];

        const wrapper = shallowMount(CChartLine, {
            props: {
                data: mockLineData,
                colors: customColors
            }
        });

        expect(wrapper.props('colors')).toEqual(customColors);
    });
});
