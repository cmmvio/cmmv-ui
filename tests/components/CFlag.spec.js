import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import CFlag from '../../src/components/components/CFlag.vue';

describe('CFlag', () => {
  // Configuração básica do componente
  const createWrapper = (props = {}) => {
    return mount(CFlag, {
      props: {
        iso: 'us',
        ...props
      }
    });
  };

  it('renderiza corretamente', () => {
    const wrapper = createWrapper();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('c-flag');
  });

  it('aplica o tamanho correto baseado na prop size', () => {
    const sizes = {
      sm: 'w-8',
      md: 'w-10',
      lg: 'w-12',
      xl: 'w-16',
      '2xl': 'w-24'
    };

    // Testa cada tamanho
    Object.entries(sizes).forEach(([size, className]) => {
      const wrapper = createWrapper({ size });
      expect(wrapper.classes()).toContain(className);
    });
  });

  it('aplica o arredondamento correto baseado na prop rounded', () => {
    const roundedStyles = {
      none: 'rounded-none',
      default: 'rounded',
      md: 'rounded-md',
      full: 'rounded-full'
    };

    // Testa cada estilo de arredondamento
    Object.entries(roundedStyles).forEach(([rounded, className]) => {
      const wrapper = createWrapper({ rounded });
      expect(wrapper.classes()).toContain(className);
    });
  });

  it('aplica a sombra correta baseada na prop shadow', () => {
    const shadow = 'shadow-lg';
    const wrapper = createWrapper({ shadow });
    expect(wrapper.classes()).toContain(shadow);
  });

  it('aplica a borda correta baseada na prop border', () => {
    const border = 'border-2 border-red-500';
    const wrapper = createWrapper({ border });
    expect(wrapper.classes()).toContain('border-2');
    expect(wrapper.classes()).toContain('border-red-500');
  });

  it('define o aria-label correto', () => {
    const ariaLabel = 'Bandeira dos Estados Unidos';
    const wrapper = createWrapper({ ariaLabel });
    expect(wrapper.attributes('aria-label')).toBe(ariaLabel);
  });
});
