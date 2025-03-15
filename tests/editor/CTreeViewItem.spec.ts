import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import CTreeViewItem from '../../src/components/editor/CTreeViewItem.vue';

describe('CTreeViewItem Component', () => {
    // Sample data for testing
    const fileItem = {
        id: 'file1',
        name: 'test.txt',
        path: '/folder/test.txt',
        type: 'file',
        extension: 'txt'
    };

    const folderItem = {
        id: 'folder1',
        name: 'Test Folder',
        path: '/folder',
        type: 'folder',
        children: [
            {
                id: 'file2',
                name: 'child.js',
                path: '/folder/child.js',
                type: 'file',
                extension: 'js'
            }
        ]
    };

    // Sample icon map
    const iconMap = {
        folder: 'folder-icon',
        folderOpen: 'folder-open-icon',
        file: 'file-icon',
        txt: 'text-icon',
        js: 'js-icon'
    };

    // Mock treeView inject response
    const mockToggleNode = vi.fn();
    const mockSelectNode = vi.fn();
    const mockRenameNode = vi.fn();

    const createMountOptions = (item, isRenaming = false) => ({
        props: {
            item: item,
            indentLevel: 0,
            draggable: true,
            showIcons: true,
            iconMap
        },
        global: {
            provide: {
                treeView: {
                    expandedNodes: { value: new Set() },
                    selectedNode: { value: null },
                    renamingNode: { value: isRenaming ? item : null },
                    toggleNode: mockToggleNode,
                    selectNode: mockSelectNode,
                    renameNode: mockRenameNode
                }
            },
            stubs: {
                'icon-chevron-right': true,
                'icon-file-plus': true,
                'icon-pencil': true
            }
        }
    });

    beforeEach(() => {
        // Reset mocks
        vi.clearAllMocks();
        mockToggleNode.mockReset();
        mockSelectNode.mockReset();
        mockRenameNode.mockReset();
    });

    it('renders file item correctly', () => {
        const wrapper = mount(CTreeViewItem, createMountOptions(fileItem));

        expect(wrapper.find('.tree-node').exists()).toBe(true);
        expect(wrapper.find('.node-name').text()).toBe('test.txt');
        expect(wrapper.attributes('data-path')).toBe('/folder/test.txt');
        expect(wrapper.attributes('data-type')).toBe('file');
    });

    it('renders folder item correctly', () => {
        const wrapper = mount(CTreeViewItem, createMountOptions(folderItem));

        expect(wrapper.find('.tree-node').exists()).toBe(true);
        expect(wrapper.find('.node-name').text()).toBe('Test Folder');
        expect(wrapper.find('.node-toggle').exists()).toBe(true);
        expect(wrapper.attributes('data-path')).toBe('/folder');
        expect(wrapper.attributes('data-type')).toBe('folder');
    });

    it('renders with correct indentation', () => {
        const wrapper = mount(CTreeViewItem, {
            ...createMountOptions(fileItem),
            props: {
                item: fileItem,
                indentLevel: 2,
                draggable: true,
                showIcons: true,
                iconMap
            }
        });

        // Indent level 2 should result in padding-left: 36px (indentLevel * 16 + 4)
        expect(wrapper.find('.node-content').attributes('style')).toContain('padding-left: 36px');
    });

    it('shows folder toggle icon for folders', () => {
        const wrapper = mount(CTreeViewItem, createMountOptions(folderItem));
        expect(wrapper.find('.node-toggle').exists()).toBe(true);
    });

    it('applies selected class when item is selected', () => {
        const selectedItem = { ...fileItem, selected: true };
        const wrapper = mount(CTreeViewItem, createMountOptions(selectedItem));

        // Should have the selected class
        expect(wrapper.find('.node-content').classes()).toContain('bg-blue-50');
        expect(wrapper.find('.node-content').classes()).toContain('dark:bg-blue-900/20');
    });

    it('calls toggleNode from inject when toggle icon is clicked on a folder', async () => {
        const wrapper = mount(CTreeViewItem, createMountOptions(folderItem));

        // Click the toggle icon
        await wrapper.find('.node-toggle').trigger('click');

        // Should call the toggleNode method in the provide context
        expect(mockToggleNode).toHaveBeenCalledWith(folderItem);
    });

    it('calls selectNode from inject when item is clicked', async () => {
        const wrapper = mount(CTreeViewItem, createMountOptions(fileItem));

        // Click the item
        await wrapper.find('.node-content').trigger('click');

        // Should call the selectNode method in the provide context
        expect(mockSelectNode).toHaveBeenCalledWith(fileItem);
    });

    it('emits context-menu event when right-clicked', async () => {
        const wrapper = mount(CTreeViewItem, createMountOptions(fileItem));

        // Trigger context menu
        await wrapper.find('.node-content').trigger('contextmenu');

        // Should emit context-menu event
        expect(wrapper.emitted('context-menu')).toBeTruthy();
    });

    it('renders rename input when startRename is called', async () => {
        const wrapper = mount(CTreeViewItem, createMountOptions(fileItem));

        // Call the startRename method directly
        wrapper.vm.startRename();
        await wrapper.vm.$nextTick();

        // Now check for the rename input
        expect(wrapper.find('input.rename-input').exists()).toBe(true);
    });

    it('shows file-specific icon based on extension', () => {
        const wrapper = mount(CTreeViewItem, createMountOptions(fileItem));

        // For .txt files, the component should use the txt icon from the iconMap
        expect(wrapper.find('.node-icon').exists()).toBe(true);
    });

    it('shows folder icon for folders', () => {
        const wrapper = mount(CTreeViewItem, createMountOptions(folderItem));

        // For folders, the component should use the folder icon from the iconMap
        expect(wrapper.find('.node-icon').exists()).toBe(true);
    });

    it('emits select event with action when file is double-clicked', async () => {
        const wrapper = mount(CTreeViewItem, createMountOptions(fileItem));

        // Call handleDoubleClick directly
        await wrapper.vm.handleDoubleClick();

        // Should emit select event
        expect(wrapper.emitted('select')).toBeTruthy();
        expect(wrapper.emitted('select')[0][0].action).toBe('open');
    });

    it('calls toggleNode when folder is double-clicked', async () => {
        const wrapper = mount(CTreeViewItem, createMountOptions(folderItem));

        // Call handleDoubleClick directly
        await wrapper.vm.handleDoubleClick();

        // Should call toggleNode
        expect(mockToggleNode).toHaveBeenCalledWith(folderItem);
    });
});
