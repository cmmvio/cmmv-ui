import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import CChartDoughnut from '../../src/components/data/CChartDoughnut.vue';

// Mock mínimo para dados do gráfico de rosca
const mockChartData = {
    labels: ['Vermelho', 'Azul', 'Amarelo'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)'
            ]
        }
    ]
};

describe('CChartDoughnut Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();

        // Mockando o contexto do canvas
        HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
            canvas: { width: 100, height: 100 }
        }));
    });

    it('renderiza corretamente com props padrão', () => {
        const wrapper = shallowMount(CChartDoughnut, {
            props: {
                data: mockChartData
            }
        });

        // Verificar se o componente existe
        expect(wrapper.exists()).toBe(true);

        // Verificar se o canvas foi renderizado
        expect(wrapper.find('canvas').exists()).toBe(true);

        // Verificar se o container possui a classe correta
        expect(wrapper.find('.chart-container').exists()).toBe(true);
    });

    it('aplica as props width e height corretamente', () => {
        const wrapper = shallowMount(CChartDoughnut, {
            props: {
                data: mockChartData,
                width: '300px',
                height: '200px'
            }
        });

        // Verificar se as dimensões foram aplicadas ao container
        const container = wrapper.find('.chart-container');
        const style = container.attributes('style');

        expect(style).toContain('width: 300px');
        expect(style).toContain('height: 200px');
    });

    it('aplica props de customização específicas para doughnut', () => {
        const wrapper = shallowMount(CChartDoughnut, {
            props: {
                data: mockChartData,
                cutout: '70%',
                rotation: 45,
                circumference: 270
            }
        });

        // Verificar se as props foram corretamente aplicadas
        expect(wrapper.props('cutout')).toBe('70%');
        expect(wrapper.props('rotation')).toBe(45);
        expect(wrapper.props('circumference')).toBe(270);
    });

    it('expõe métodos para manipular o gráfico', () => {
        const wrapper = shallowMount(CChartDoughnut, {
            props: {
                data: mockChartData
            }
        });

        // Verificar se os métodos expostos existem
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
