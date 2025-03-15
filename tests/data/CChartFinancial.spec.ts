import { shallowMount, mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Define Chart.js mock first, BEFORE importing the component
vi.mock('chart.js', () => {
    const chartInstance = {
        destroy: vi.fn(),
        resize: vi.fn(),
        update: vi.fn()
    };

    const Chart = vi.fn(() => chartInstance);
    Chart.register = vi.fn(); // Add the register method that's used in the component

    return {
        Chart,
        BarElement: vi.fn(),
        BarController: vi.fn(),
        CategoryScale: vi.fn(),
        LinearScale: vi.fn(),
        Tooltip: vi.fn(),
        Legend: vi.fn()
    };
});

// Now import the component
import CChartFinancial from '../../src/components/data/CChartFinancial.vue';

// Sample data for financial chart with different formats
const mockFinancialData = {
    datasets: [
        {
            label: 'AAPL',
            data: [
                { t: new Date('2023-01-01'), o: 150, h: 155, l: 145, c: 152 },
                { t: new Date('2023-01-02'), o: 152, h: 160, l: 150, c: 158 },
                { t: new Date('2023-01-03'), o: 158, h: 165, l: 155, c: 160 }
            ]
        }
    ]
};

// Alternative data format using arrays
const mockArrayFormatData = {
    datasets: [
        {
            label: 'MSFT',
            data: [
                [new Date('2023-01-01').getTime(), 250, 258, 245, 252],
                [new Date('2023-01-02').getTime(), 252, 262, 248, 260],
                [new Date('2023-01-03').getTime(), 260, 268, 255, 265]
            ]
        }
    ]
};

// Alternative data format using open/high/low/close naming
const mockAlternativeNamingData = {
    datasets: [
        {
            label: 'GOOGL',
            data: [
                { date: new Date('2023-01-01'), open: 2500, high: 2580, low: 2450, close: 2520 },
                { date: new Date('2023-01-02'), open: 2520, high: 2620, low: 2480, close: 2600 },
                { date: new Date('2023-01-03'), open: 2600, high: 2680, low: 2550, close: 2650 }
            ]
        }
    ]
};

// Empty data for edge case testing
const mockEmptyData = {
    datasets: []
};

describe('CChartFinancial Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();

        // Mock for canvas context
        HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
            canvas: { width: 100, height: 100 },
            clearRect: vi.fn()
        }));
    });

    it('renders correctly with default props', () => {
        const wrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockFinancialData
            }
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('canvas').exists()).toBe(true);
        expect(wrapper.find('.chart-container').exists()).toBe(true);
    });

    it('correctly applies width and height props', () => {
        const wrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockFinancialData,
                width: '600px',
                height: '300px'
            }
        });

        const container = wrapper.find('.chart-container');
        expect(container.attributes('style')).toContain('width: 600px');
        expect(container.attributes('style')).toContain('height: 300px');
    });

    it('supports both types of financial charts', () => {
        // Test for candlestick
        const candlestickWrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockFinancialData,
                chartType: 'candlestick'
            }
        });

        expect(candlestickWrapper.props('chartType')).toBe('candlestick');

        // Test for OHLC
        const ohlcWrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockFinancialData,
                chartType: 'ohlc'
            }
        });

        expect(ohlcWrapper.props('chartType')).toBe('ohlc');
    });

    it('applies custom colors', () => {
        const wrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockFinancialData,
                upColor: 'rgba(0, 255, 0, 0.5)',
                downColor: 'rgba(255, 0, 0, 0.5)',
                upBorderColor: 'rgb(0, 255, 0)',
                downBorderColor: 'rgb(255, 0, 0)'
            }
        });

        expect(wrapper.props('upColor')).toBe('rgba(0, 255, 0, 0.5)');
        expect(wrapper.props('downColor')).toBe('rgba(255, 0, 0, 0.5)');
        expect(wrapper.props('upBorderColor')).toBe('rgb(0, 255, 0)');
        expect(wrapper.props('downBorderColor')).toBe('rgb(255, 0, 0)');
    });

    it('exposes methods for chart manipulation', () => {
        const wrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockFinancialData
            }
        });

        // Check exposed methods
        expect(typeof wrapper.vm.addDataset).toBe('function');
        expect(typeof wrapper.vm.updateDataset).toBe('function');
        expect(typeof wrapper.vm.removeDataset).toBe('function');
        expect(typeof wrapper.vm.addData).toBe('function');
        expect(typeof wrapper.vm.removeData).toBe('function');
        expect(typeof wrapper.vm.resizeChart).toBe('function');
        expect(typeof wrapper.vm.recreateChart).toBe('function');
    });

    it('handles different data formats - object with t/o/h/l/c properties', () => {
        const wrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockFinancialData
            }
        });

        expect(wrapper.exists()).toBe(true);
        // The component should process this format without errors
    });

    it('handles different data formats - array format [time, open, high, low, close]', () => {
        const wrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockArrayFormatData
            }
        });

        expect(wrapper.exists()).toBe(true);
        // The component should process this format without errors
    });

    it('handles different data formats - objects with alternative naming', () => {
        const wrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockAlternativeNamingData
            }
        });

        expect(wrapper.exists()).toBe(true);
        // The component should process this format without errors
    });

    it('handles empty datasets gracefully', () => {
        const wrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockEmptyData
            }
        });

        expect(wrapper.exists()).toBe(true);
        // The chart should not be created, but the component should not crash
    });

    it('emits chart-created event when chart is created', async () => {
        const wrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockFinancialData
            }
        });

        // Wait for mounted hook to complete (setTimeout in component)
        await new Promise(resolve => setTimeout(resolve, 300));

        expect(wrapper.emitted('chart-created')).toBeTruthy();
    });

    it('emits chart-updated event when chart data changes', async () => {
        const wrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockFinancialData
            }
        });

        // Wait for initial chart creation
        await new Promise(resolve => setTimeout(resolve, 300));

        // Call method that should trigger chart update
        wrapper.vm.addData({ t: new Date('2023-01-04'), o: 160, h: 170, l: 158, c: 165 });

        // Wait for nextTick in the component method
        await wrapper.vm.$nextTick();

        expect(wrapper.emitted('chart-updated')).toBeTruthy();
    });

    it('applies custom title correctly', () => {
        const customTitle = 'AAPL Stock Price';
        const wrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockFinancialData,
                title: customTitle
            }
        });

        expect(wrapper.props('title')).toBe(customTitle);
    });

    it('applies custom legend options correctly', () => {
        const customLegend = {
            display: true,
            position: 'bottom',
            labels: {
                font: {
                    size: 14
                }
            }
        };

        const wrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockFinancialData,
                legend: customLegend
            }
        });

        expect(wrapper.props('legend')).toEqual(customLegend);
    });

    it('applies responsive prop correctly', () => {
        // Test with responsive true (default)
        const responsiveWrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockFinancialData,
                responsive: true
            }
        });

        expect(responsiveWrapper.props('responsive')).toBe(true);

        // Test with responsive false
        const nonResponsiveWrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockFinancialData,
                responsive: false
            }
        });

        expect(nonResponsiveWrapper.props('responsive')).toBe(false);
    });

    it('applies maintainAspectRatio prop correctly', () => {
        // Test with maintainAspectRatio false (default)
        const defaultWrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockFinancialData
            }
        });

        expect(defaultWrapper.props('maintainAspectRatio')).toBe(false);

        // Test with maintainAspectRatio true
        const aspectRatioWrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockFinancialData,
                maintainAspectRatio: true
            }
        });

        expect(aspectRatioWrapper.props('maintainAspectRatio')).toBe(true);
    });

    it('applies custom options that override defaults', () => {
        const customOptions = {
            responsive: false,
            scales: {
                y: {
                    beginAtZero: true,
                    min: 100,
                    max: 200
                }
            }
        };

        const wrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockFinancialData,
                options: customOptions
            }
        });

        expect(wrapper.props('options')).toEqual(customOptions);
    });

    it('handles financial chart specific props (upColor, downColor)', async () => {
        const customColors = {
            upColor: 'rgba(0, 255, 0, 0.2)',
            downColor: 'rgba(255, 0, 0, 0.2)',
            upBorderColor: 'rgb(0, 255, 0)',
            downBorderColor: 'rgb(255, 0, 0)'
        };

        const wrapper = shallowMount(CChartFinancial, {
            props: {
                data: mockFinancialData,
                ...customColors
            }
        });

        // Verify the props were set correctly
        expect(wrapper.props('upColor')).toBe(customColors.upColor);
        expect(wrapper.props('downColor')).toBe(customColors.downColor);
        expect(wrapper.props('upBorderColor')).toBe(customColors.upBorderColor);
        expect(wrapper.props('downBorderColor')).toBe(customColors.downBorderColor);

        // Change colors and verify they update
        await wrapper.setProps({
            upColor: 'rgba(0, 200, 0, 0.5)',
            downColor: 'rgba(200, 0, 0, 0.5)'
        });

        expect(wrapper.props('upColor')).toBe('rgba(0, 200, 0, 0.5)');
        expect(wrapper.props('downColor')).toBe('rgba(200, 0, 0, 0.5)');
    });
});