import { describe, it, expect, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import CPagination from '../../src/components/data/CPagination.vue';

describe('CPagination Component', () => {
    it('renders correctly with default props', () => {
        const wrapper = shallowMount(CPagination, {
            props: {
                totalItems: 100,
                modelValue: 1
            }
        });

        expect(wrapper.exists()).toBe(true);

        // Check that navigation buttons are rendered
        expect(wrapper.find('button[title="First page"]').exists()).toBe(true);
        expect(wrapper.find('button[title="Previous page"]').exists()).toBe(true);
        expect(wrapper.find('button[title="Next page"]').exists()).toBe(true);
        expect(wrapper.find('button[title="Last page"]').exists()).toBe(true);

        // Default page buttons should be rendered
        const pageButtons = wrapper.findAll('button').filter(btn => !isNaN(Number(btn.text().trim())));
        expect(pageButtons.length).toBeGreaterThan(0);
    });

    it('calculates total pages correctly based on totalItems and perPage', () => {
        // 100 items with 10 per page = 10 pages
        const wrapper = shallowMount(CPagination, {
            props: {
                totalItems: 100,
                modelValue: 1,
                perPage: 10
            }
        });

        // The last page button should be page 10
        const lastPageBtn = wrapper.findAll('button').filter(btn => btn.text().trim() === '10');
        expect(lastPageBtn.length).toBe(1);

        // 100 items with 25 per page = 4 pages
        const wrapper2 = shallowMount(CPagination, {
            props: {
                totalItems: 100,
                modelValue: 1,
                perPage: 25
            }
        });

        // The last page button should be page 4
        const lastPageBtn2 = wrapper2.findAll('button').filter(btn => btn.text().trim() === '4');
        expect(lastPageBtn2.length).toBe(1);
    });

    it('handles page selection correctly', async () => {
        const wrapper = shallowMount(CPagination, {
            props: {
                totalItems: 100,
                modelValue: 1
            }
        });

        // Find the page 2 button and click it
        const page2Btn = wrapper.findAll('button').find(btn => btn.text().trim() === '2');
        if (page2Btn) {
            await page2Btn.trigger('click');
        }

        // Check that update:modelValue was emitted with value 2
        expect(wrapper.emitted('update:modelValue')).toBeTruthy();
        if (wrapper.emitted('update:modelValue')) {
            expect(wrapper.emitted('update:modelValue')[0][0]).toBe(2);
        }

        // Check that pageChange was emitted with correct values
        expect(wrapper.emitted('pageChange')).toBeTruthy();
        if (wrapper.emitted('pageChange')) {
            const pageChangeEvent = wrapper.emitted('pageChange')[0][0];
            expect(pageChangeEvent.page).toBe(2);
            expect(pageChangeEvent.perPage).toBe(10); // Default perPage
        }
    });

    it('disables first/previous buttons on first page', () => {
        const wrapper = shallowMount(CPagination, {
            props: {
                totalItems: 100,
                modelValue: 1
            }
        });

        const firstPageBtn = wrapper.find('button[title="First page"]');
        const prevPageBtn = wrapper.find('button[title="Previous page"]');

        expect(firstPageBtn.attributes('disabled')).toBeDefined();
        expect(prevPageBtn.attributes('disabled')).toBeDefined();
    });

    it('disables next/last buttons on last page', () => {
        const wrapper = shallowMount(CPagination, {
            props: {
                totalItems: 100,
                modelValue: 10,
                perPage: 10
            }
        });

        const nextPageBtn = wrapper.find('button[title="Next page"]');
        const lastPageBtn = wrapper.find('button[title="Last page"]');

        expect(nextPageBtn.attributes('disabled')).toBeDefined();
        expect(lastPageBtn.attributes('disabled')).toBeDefined();
    });

    it('shows perPage select when showPerPageSelect is true', () => {
        const wrapper = shallowMount(CPagination, {
            props: {
                totalItems: 100,
                modelValue: 1,
                showPerPageSelect: true
            }
        });

        // Check that per page select is rendered
        const perPageSelect = wrapper.find('select');
        expect(perPageSelect.exists()).toBe(true);

        // Check default per page options
        const options = perPageSelect.findAll('option');
        expect(options.length).toBe(4); // Default options [10, 25, 50, 100]
        expect(options[0].text()).toBe('10');
        expect(options[1].text()).toBe('25');
        expect(options[2].text()).toBe('50');
        expect(options[3].text()).toBe('100');
    });

    it('emits update:perPage and resets page when perPage changes', async () => {
        const wrapper = shallowMount(CPagination, {
            props: {
                totalItems: 100,
                modelValue: 5, // Page 5 of 10 with 10 per page
                perPage: 10,
                showPerPageSelect: true
            }
        });

        // Find per page select and change value to 25
        const perPageSelect = wrapper.find('select');
        await perPageSelect.setValue(25);
        await perPageSelect.trigger('change');

        // Check that update:perPage was emitted with value 25
        expect(wrapper.emitted('update:perPage')).toBeTruthy();
        if (wrapper.emitted('update:perPage')) {
            expect(wrapper.emitted('update:perPage')[0][0]).toBe(25);
        }

        // With 25 per page, there are only 4 pages, so page should be reset to 4
        expect(wrapper.emitted('update:modelValue')).toBeTruthy();
        if (wrapper.emitted('update:modelValue')) {
            expect(wrapper.emitted('update:modelValue')[0][0]).toBe(4);
        }

        // Check that pageChange was emitted with correct values
        expect(wrapper.emitted('pageChange')).toBeTruthy();
        if (wrapper.emitted('pageChange')) {
            const pageChangeEvent = wrapper.emitted('pageChange')[0][0];
            expect(pageChangeEvent.page).toBe(4);
            expect(pageChangeEvent.perPage).toBe(25);
        }
    });

    it('renders in input mode when mode is set to input', () => {
        const wrapper = shallowMount(CPagination, {
            props: {
                totalItems: 100,
                modelValue: 1,
                mode: 'input'
            }
        });

        // Check that input is rendered
        const pageInput = wrapper.find('input[type="number"]');
        expect(pageInput.exists()).toBe(true);
        expect(pageInput.element.value).toBe('1');

        // Check that input mode buttons are rendered
        expect(wrapper.find('button[title="Previous page"]').exists()).toBe(true);
        expect(wrapper.find('button[title="Next page"]').exists()).toBe(true);
    });

    it('handles page input correctly in input mode', async () => {
        const wrapper = shallowMount(CPagination, {
            props: {
                totalItems: 100,
                modelValue: 1,
                mode: 'input'
            }
        });

        // Find page input and change value to 5
        const pageInput = wrapper.find('input[type="number"]');
        await pageInput.setValue(5);
        await pageInput.trigger('change');

        // Check that update:modelValue was emitted with value 5
        expect(wrapper.emitted('update:modelValue')).toBeTruthy();
        if (wrapper.emitted('update:modelValue')) {
            expect(wrapper.emitted('update:modelValue')[0][0]).toBe(5);
        }

        // Check that pageChange was emitted with correct values
        expect(wrapper.emitted('pageChange')).toBeTruthy();
        if (wrapper.emitted('pageChange')) {
            const pageChangeEvent = wrapper.emitted('pageChange')[0][0];
            expect(pageChangeEvent.page).toBe(5);
            expect(pageChangeEvent.perPage).toBe(10); // Default perPage
        }
    });

    it('applies custom text props correctly', () => {
        const texts = {
            pageText: "Página",
            showingText: "Mostrando",
            ofText: "de",
            itemsText: "itens",
            firstPageText: "Primeira página",
            previousPageText: "Página anterior",
            nextPageText: "Próxima página",
            lastPageText: "Última página"
        };

        const wrapper = shallowMount(CPagination, {
            props: {
                totalItems: 100,
                modelValue: 1,
                showPerPageSelect: true,
                ...texts
            }
        });

        // Check that custom texts are applied
        const content = wrapper.html();
        expect(content).toContain(texts.showingText);
        expect(content).toContain(texts.ofText);
        expect(content).toContain(texts.itemsText);

        // Check button titles
        expect(wrapper.find(`button[title="${texts.firstPageText}"]`).exists()).toBe(true);
        expect(wrapper.find(`button[title="${texts.previousPageText}"]`).exists()).toBe(true);
        expect(wrapper.find(`button[title="${texts.nextPageText}"]`).exists()).toBe(true);
        expect(wrapper.find(`button[title="${texts.lastPageText}"]`).exists()).toBe(true);
    });
});
