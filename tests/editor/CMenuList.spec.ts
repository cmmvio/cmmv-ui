import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import CMenuList from '../../src/components/editor/CMenuList.vue';

describe('CMenuList Component', () => {
    // Sample menu items for testing
    const menuItems = [
        { id: 'item1', label: 'Item 1' },
        { id: 'item2', label: 'Item 2', icon: 'icon-test', shortcut: 'Ctrl+1' },
        { id: 'item3', label: 'Item 3', disabled: true },
        { id: 'divider1', divider: true },
        {
            id: 'item4',
            label: 'Item 4',
            items: [
                { id: 'subitem1', label: 'Subitem 1' },
                { id: 'subitem2', label: 'Subitem 2' }
            ]
        }
    ];

    it('renders menu items correctly', () => {
        const wrapper = mount(CMenuList, {
            props: {
                items: menuItems,
                parentId: 'test-menu'
            }
        });

        // Verify all items are rendered
        const items = wrapper.findAll('.c-menu-item');
        expect(items.length).toBe(5);

        // Verify labels are rendered
        expect(items[0].text()).toContain('Item 1');
        expect(items[1].text()).toContain('Item 2');

        // Verify item with submenu has indicator
        expect(items[4].find('.c-menu-item-submenu-indicator').exists()).toBe(true);

        // Verify divider is rendered
        expect(items[3].find('.c-menu-divider').exists()).toBe(true);
    });

    it('applies correct classes to items based on their properties', () => {
        const wrapper = mount(CMenuList, {
            props: {
                items: menuItems,
                parentId: 'test-menu'
            }
        });

        const items = wrapper.findAll('.c-menu-item');

        // Check disabled class
        expect(items[2].classes()).toContain('c-menu-item--disabled');

        // Check submenu class
        expect(items[4].classes()).toContain('c-menu-item--has-submenu');

        // Check divider class
        expect(items[3].classes()).toContain('c-menu-item--divider');
    });

    it('displays icons when provided', () => {
        const wrapper = mount(CMenuList, {
            props: {
                items: menuItems,
                parentId: 'test-menu'
            }
        });

        // Item 2 has an icon
        const iconItem = wrapper.findAll('.c-menu-item')[1];
        expect(iconItem.find('.c-menu-item-icon').exists()).toBe(true);
        expect(iconItem.find('.c-menu-item-icon i').classes()).toContain('icon-test');
    });

    it('displays keyboard shortcuts when provided', () => {
        const wrapper = mount(CMenuList, {
            props: {
                items: menuItems,
                parentId: 'test-menu'
            }
        });

        // Item 2 has a shortcut
        const shortcutItem = wrapper.findAll('.c-menu-item')[1];
        expect(shortcutItem.find('.c-menu-item-shortcut').exists()).toBe(true);
        expect(shortcutItem.find('.c-menu-item-shortcut').text()).toBe('Ctrl+1');
    });

    it('emits select event when item is clicked', async () => {
        const wrapper = mount(CMenuList, {
            props: {
                items: menuItems,
                parentId: 'test-menu'
            }
        });

        // Click on the first item
        await wrapper.findAll('.c-menu-item')[0].trigger('click');

        // Verify select event is emitted with correct item ID
        expect(wrapper.emitted('select')).toBeTruthy();
        expect(wrapper.emitted('select')![0]).toEqual(['item1']);
    });

    it('does not emit select event when disabled item is clicked', async () => {
        const wrapper = mount(CMenuList, {
            props: {
                items: menuItems,
                parentId: 'test-menu'
            }
        });

        // Click on the disabled item (item3)
        await wrapper.findAll('.c-menu-item')[2].trigger('click');

        // Verify no select event is emitted
        expect(wrapper.emitted('select')).toBeFalsy();
    });

    it('does not emit select event when divider is clicked', async () => {
        const wrapper = mount(CMenuList, {
            props: {
                items: menuItems,
                parentId: 'test-menu'
            }
        });

        // Click on the divider
        await wrapper.findAll('.c-menu-item')[3].trigger('click');

        // Verify no select event is emitted
        expect(wrapper.emitted('select')).toBeFalsy();
    });

    it('emits hover event when item is hovered', async () => {
        const wrapper = mount(CMenuList, {
            props: {
                items: menuItems,
                parentId: 'test-menu'
            }
        });

        // Hover on the first item
        await wrapper.findAll('.c-menu-item')[0].trigger('mouseenter');

        // Verify hover event is emitted with correct item ID and parent ID
        expect(wrapper.emitted('hover')).toBeTruthy();
        expect(wrapper.emitted('hover')![0]).toEqual(['item1', 'test-menu']);
    });

    it('applies active class to active item', () => {
        const wrapper = mount(CMenuList, {
            props: {
                items: menuItems,
                parentId: 'test-menu',
                activeItem: 'item2'
            }
        });

        const items = wrapper.findAll('.c-menu-item');

        // Check that the second item has the active class
        expect(items[1].classes()).toContain('c-menu-item--active');

        // Check that other items don't have the active class
        expect(items[0].classes()).not.toContain('c-menu-item--active');
        expect(items[2].classes()).not.toContain('c-menu-item--active');
    });
});
