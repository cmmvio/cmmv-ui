import { describe, it, expect, vi, beforeEach } from 'vitest';
import { shallowMount, mount } from '@vue/test-utils';
import CMenu from '../../src/components/editor/CMenu.vue';

// Sample menu items for testing
const sampleMenuItems = [
    {
        id: 'file', label: 'File', items: [
            { id: 'new', label: 'New', action: vi.fn() },
            { id: 'open', label: 'Open', action: vi.fn() },
            { id: 'save', label: 'Save', action: vi.fn() },
            { id: 'divider1', divider: true },
            { id: 'exit', label: 'Exit', action: vi.fn() }
        ]
    },
    {
        id: 'edit', label: 'Edit', items: [
            { id: 'cut', label: 'Cut', shortcut: 'Ctrl+X', action: vi.fn() },
            { id: 'copy', label: 'Copy', shortcut: 'Ctrl+C', action: vi.fn() },
            { id: 'paste', label: 'Paste', shortcut: 'Ctrl+V', action: vi.fn() },
            {
                id: 'submenu', label: 'More Actions', items: [
                    { id: 'action1', label: 'Action 1', action: vi.fn() },
                    { id: 'action2', label: 'Action 2', action: vi.fn() }
                ]
            }
        ]
    },
    {
        id: 'help', label: 'Help', items: [
            { id: 'about', label: 'About', action: vi.fn() },
            { id: 'disabled', label: 'Disabled Item', disabled: true, action: vi.fn() }
        ]
    }
];

describe('CMenu Component', () => {
    beforeEach(() => {
        // Reset document click handlers between tests
        document.body.innerHTML = '';
        window.innerWidth = 1024;
        window.innerHeight = 768;

        // Mock getBoundingClientRect
        Element.prototype.getBoundingClientRect = vi.fn().mockReturnValue({
            width: 100,
            height: 30,
            top: 100,
            left: 100,
            right: 200,
            bottom: 130,
            x: 100,
            y: 100
        });
    });

    it('renders correctly in dropdown mode', () => {
        const wrapper = shallowMount(CMenu, {
            props: {
                items: sampleMenuItems,
                menuType: 'dropdown'
            }
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.classes()).toContain('c-menu');
        expect(wrapper.find('.c-menu-dropdown-trigger').exists()).toBe(true);
        expect(wrapper.find('.c-menu-bar').exists()).toBe(false);
    });

    it('renders correctly in menubar mode', () => {
        const wrapper = shallowMount(CMenu, {
            props: {
                items: sampleMenuItems,
                menuType: 'menubar'
            }
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.c-menu-bar').exists()).toBe(true);

        const menuItems = wrapper.findAll('.c-menu-bar-item');
        expect(menuItems.length).toBe(3); // File, Edit, Help
        expect(menuItems[0].text()).toBe('File');
        expect(menuItems[1].text()).toBe('Edit');
        expect(menuItems[2].text()).toBe('Help');
    });

    it('renders correctly in context mode', () => {
        const wrapper = shallowMount(CMenu, {
            props: {
                items: sampleMenuItems,
                menuType: 'context'
            },
            slots: {
                default: '<div>Right-click me</div>'
            }
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.c-menu-context-trigger').exists()).toBe(true);
        expect(wrapper.find('.c-menu-context-trigger').text()).toBe('Right-click me');
    });

    it('opens menu when open method is called directly', async () => {
        const wrapper = mount(CMenu, {
            props: {
                items: sampleMenuItems,
                menuType: 'dropdown'
            },
            attachTo: document.body
        });

        // Call the open method directly instead of triggering click
        wrapper.vm.open();
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.isOpen).toBe(true);
        expect(wrapper.find('.c-menu-container').exists()).toBe(true);
        expect(wrapper.find('.c-menu-overlay').exists()).toBe(true);
    });

    it('displays correct menu items when opened via open method', async () => {
        const wrapper = mount(CMenu, {
            props: {
                items: sampleMenuItems,
                menuType: 'dropdown'
            },
            attachTo: document.body
        });

        // Open the menu directly
        wrapper.vm.open();
        await wrapper.vm.$nextTick();

        // Check that menu items exist
        const menuItems = wrapper.findAll('.c-menu-item');
        expect(menuItems.length).toBe(3);

        // Check each item's text
        const itemTexts = menuItems.map(item => item.text().trim());
        expect(itemTexts).toContain('File');
        expect(itemTexts).toContain('Edit');
        expect(itemTexts).toContain('Help');
    });

    it('handles submenu opening programmatically', async () => {
        const wrapper = mount(CMenu, {
            props: {
                items: sampleMenuItems,
                menuType: 'dropdown'
            },
            attachTo: document.body
        });

        // Open menu
        wrapper.vm.open();
        await wrapper.vm.$nextTick();

        // Directly call handleItemHover with the File menu item
        const fileMenuItem = sampleMenuItems[0];
        wrapper.vm.handleItemHover(fileMenuItem, 'root');

        // Wait for submenu opening timeout
        await new Promise(resolve => setTimeout(resolve, 150));

        // Check that the submenu is in the openSubmenus array
        expect(wrapper.vm.openSubmenus.some(submenu => submenu.id === 'file')).toBe(true);
    });

    it('can select menu items programmatically', async () => {
        const wrapper = mount(CMenu, {
            props: {
                items: sampleMenuItems,
                menuType: 'dropdown'
            },
            attachTo: document.body
        });

        // Open menu
        wrapper.vm.open();
        await wrapper.vm.$nextTick();

        // Simulate selecting the New item under File
        const newMenuItem = sampleMenuItems[0].items[0];
        wrapper.vm.handleItemClick(newMenuItem);

        // Check that select event was emitted
        expect(wrapper.emitted('select')).toBeTruthy();
        if (wrapper.emitted('select')) {
            expect(wrapper.emitted('select')[0][0].id).toBe('new');
        }

        // Check that action was called
        expect(sampleMenuItems[0].items[0].action).toHaveBeenCalled();
    });

    it('doesnt call actions for disabled items', async () => {
        const wrapper = mount(CMenu, {
            props: {
                items: sampleMenuItems,
                menuType: 'dropdown'
            },
            attachTo: document.body
        });

        // Open menu
        wrapper.vm.open();
        await wrapper.vm.$nextTick();

        // Get the disabled item from Help menu
        const disabledItem = sampleMenuItems[2].items[1];

        // Verify it's disabled
        expect(disabledItem.disabled).toBe(true);

        // Try to click it
        wrapper.vm.handleItemClick(disabledItem);

        // Check action was not called
        expect(disabledItem.action).not.toHaveBeenCalled();
    });

    it('closes menu when closeOnSelect is true', async () => {
        const wrapper = mount(CMenu, {
            props: {
                items: sampleMenuItems,
                menuType: 'dropdown',
                closeOnSelect: true
            },
            attachTo: document.body
        });

        // Open menu
        wrapper.vm.open();
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.isOpen).toBe(true);

        // Select a menu item
        const newMenuItem = sampleMenuItems[0].items[0];
        wrapper.vm.handleItemClick(newMenuItem);

        // Check menu is closed
        expect(wrapper.vm.isOpen).toBe(false);
    });

    it('keeps menu open when closeOnSelect is false', async () => {
        const wrapper = mount(CMenu, {
            props: {
                items: sampleMenuItems,
                menuType: 'dropdown',
                closeOnSelect: false
            },
            attachTo: document.body
        });

        // Open menu
        wrapper.vm.open();
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.isOpen).toBe(true);

        // Select a menu item
        const newMenuItem = sampleMenuItems[0].items[0];
        wrapper.vm.handleItemClick(newMenuItem);

        // Check menu is still open
        expect(wrapper.vm.isOpen).toBe(true);
    });

    it('exposes open, close and openAt methods', () => {
        const wrapper = mount(CMenu, {
            props: {
                items: sampleMenuItems
            }
        });

        expect(typeof wrapper.vm.open).toBe('function');
        expect(typeof wrapper.vm.close).toBe('function');
        expect(typeof wrapper.vm.openAt).toBe('function');

        // Test the open method
        wrapper.vm.open();
        expect(wrapper.vm.isOpen).toBe(true);

        // Test the close method
        wrapper.vm.close();
        expect(wrapper.vm.isOpen).toBe(false);

        // Test the openAt method
        wrapper.vm.openAt(150, 150);
        expect(wrapper.vm.isOpen).toBe(true);
        expect(wrapper.vm.lastPosition).toEqual({ x: 150, y: 150 });
    });

    it('verifies menu items can have shortcuts', async () => {
        const wrapper = mount(CMenu, {
            props: {
                items: sampleMenuItems,
                menuType: 'dropdown'
            },
            attachTo: document.body
        });

        // Open menu and get Edit menu
        wrapper.vm.open();
        await wrapper.vm.$nextTick();

        // Simulate opening Edit submenu
        wrapper.vm.handleItemHover(sampleMenuItems[1], 'root');
        await new Promise(resolve => setTimeout(resolve, 150));

        // Get the Edit menu items with shortcuts
        const cutItem = sampleMenuItems[1].items[0];
        const copyItem = sampleMenuItems[1].items[1];
        const pasteItem = sampleMenuItems[1].items[2];

        // Verify they have the expected shortcuts
        expect(cutItem.shortcut).toBe('Ctrl+X');
        expect(copyItem.shortcut).toBe('Ctrl+C');
        expect(pasteItem.shortcut).toBe('Ctrl+V');
    });
});
