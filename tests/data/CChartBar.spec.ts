import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import CChartBar from '../../src/components/data/CChartBar.vue';

// Mock mínimo para dados do gráfico
const mockChartData = {
    labels: ['Janeiro', 'Fevereiro', 'Março'],
    datasets: [
        {
            label: 'Vendas',
            data: [10, 20, 30],
            backgroundColor: 'rgba(75, 192, 192, 0.5)'
        }
    ]
};

describe('CChartBar Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();

        // Mockando o contexto do canvas
        HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
            canvas: { width: 100, height: 100 }
        }));
    });

    it('renderiza corretamente com props padrão', () => {
        const wrapper = shallowMount(CChartBar, {
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
        const wrapper = shallowMount(CChartBar, {
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

    it('expõe métodos para manipular o gráfico', () => {
        const wrapper = shallowMount(CChartBar, {
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
        expect(typeof wrapper.vm.resetZoom).toBe('function');
    });
});
