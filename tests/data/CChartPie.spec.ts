import { shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import CChartPie from '../../src/components/data/CChartPie.vue';

// Mock Chart.js
vi.mock('chart.js', () => {
    const chartInstance = {
        destroy: vi.fn(),
        resize: vi.fn()
    };

    // Create constructor function with static register method
    const ChartMock = vi.fn(() => chartInstance);
    ChartMock.register = vi.fn();

    return {
        Chart: ChartMock,
        registerables: []
    };
});

// Sample data for pie chart
const mockPieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
        {
            label: 'Favorite Colors',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ]
        }
    ]
};

describe('CChartPie Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();

        // Mock for canvas context
        HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
            canvas: { width: 100, height: 100 }
        }));
    });

    it('renders correctly with default props', () => {
        const wrapper = shallowMount(CChartPie, {
            props: {
                data: mockPieData
            }
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('canvas').exists()).toBe(true);
        expect(wrapper.find('.chart-container').exists()).toBe(true);
    });

    it('correctly applies width and height props', () => {
        const wrapper = shallowMount(CChartPie, {
            props: {
                data: mockPieData,
                width: '400px',
                height: '400px'
            }
        });

        const container = wrapper.find('.chart-container');
        expect(container.attributes('style')).toContain('width: 400px');
        expect(container.attributes('style')).toContain('height: 400px');
    });

    it('allows customizing rotation and circumference', () => {
        const wrapper = shallowMount(CChartPie, {
            props: {
                data: mockPieData,
                rotation: 45,
                circumference: 270
            }
        });

        expect(wrapper.props('rotation')).toBe(45);
        expect(wrapper.props('circumference')).toBe(270);
    });

    it('allows customizing border width', () => {
        const wrapper = shallowMount(CChartPie, {
            props: {
                data: mockPieData,
                borderWidth: 2
            }
        });

        expect(wrapper.props('borderWidth')).toBe(2);
    });

    it('allows configuring animation', () => {
        const customAnimation = {
            duration: 500,
            easing: 'linear'
        };

        const wrapper = shallowMount(CChartPie, {
            props: {
                data: mockPieData,
                animation: customAnimation
            }
        });

        expect(wrapper.props('animation')).toEqual(customAnimation);
    });

    it('supports legend customization', () => {
        const customLegend = {
            display: true,
            position: 'bottom',
            labels: {
                font: {
                    size: 14
                }
            }
        };

        const wrapper = shallowMount(CChartPie, {
            props: {
                data: mockPieData,
                legend: customLegend
            }
        });

        expect(wrapper.props('legend')).toEqual(customLegend);
    });

    it('allows custom colors', () => {
        const customColors = [
            'rgba(255, 0, 0, 0.8)',
            'rgba(0, 255, 0, 0.8)',
            'rgba(0, 0, 255, 0.8)'
        ];

        const wrapper = shallowMount(CChartPie, {
            props: {
                data: mockPieData,
                colors: customColors
            }
        });

        expect(wrapper.props('colors')).toEqual(customColors);
    });

    it('exposes methods for chart manipulation', () => {
        const wrapper = shallowMount(CChartPie, {
            props: {
                data: mockPieData
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
});
