import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import CAppBarNav from "../../src/components/layout/CAppBarNav.vue";

describe("CAppBarNav Component", () => {
    // Configuração de stubs global para ser usada em múltiplos testes
    const globalStubs = {
        // Stub para o componente de ícone
        IconBars3: {
            template: '<div class="mock-bars-icon" data-testid="mock-bars-icon"></div>'
        },
        // Stub para o botão
        'c-button': {
            template: '<button class="mock-button" @click="$emit(\'click\')"><slot /></button>',
            emits: ['click']
        }
    };

    it("renders correctly with default content", () => {
        const wrapper = mount(CAppBarNav, {
            global: {
                stubs: globalStubs
            }
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find(".mock-bars-icon").exists()).toBe(true);
        expect(wrapper.html()).toContain("mock-bars-icon");
    });

    it("emits click event when clicked", async () => {
        const wrapper = mount(CAppBarNav, {
            global: {
                stubs: globalStubs
            }
        });

        await wrapper.find('.mock-button').trigger('click');
        expect(wrapper.emitted('click')).toBeTruthy();
    });

    it("renders custom content via slot", () => {
        const wrapper = mount(CAppBarNav, {
            slots: {
                default: '<div class="custom-content">Custom Nav Content</div>'
            },
            global: {
                stubs: globalStubs
            }
        });

        expect(wrapper.find('.custom-content').exists()).toBe(true);
        expect(wrapper.html()).toContain('Custom Nav Content');
    });

    it("applies proper styling via mode", () => {
        const wrapper = mount(CAppBarNav, {
            props: {
                mode: 'dark'
            },
            global: {
                stubs: globalStubs
            }
        });

        // Verificar se existe um elemento com classe que indique tema escuro
        const hasIconWithWhiteText = wrapper.find('.text-white').exists();

        // Aceitar outros indicadores de tema escuro para passar o teste
        expect(hasIconWithWhiteText).toBe(true);
    });
});
