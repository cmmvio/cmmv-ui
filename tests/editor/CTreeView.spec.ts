import { mount } from '@vue/test-utils';
import CTreeView from '../../src/components/editor/CTreeView.vue';

// Stub child components since we're not testing their functionality here
const createMountOptions = () => ({
    global: {
        stubs: {
            'c-tree-view-item': {
                name: 'CTreeViewItem',
                template: '<div class="mock-tree-item">{{ item.name }}</div>',
                props: ['item', 'indentLevel', 'draggable', 'showIcons', 'iconMap', 'defaultExpandedPaths']
            },
            'c-context-menu': {
                name: 'CContextMenu',
                template: '<div class="mock-context-menu"></div>',
                props: ['x', 'y', 'node', 'clipboard', 'showInfo']
            },
            'icon-folder-open': true,
            'icon-loading': true,
            'icon-file-plus': true,
            'icon-folder-plus': true,
            'icon-refresh': true,
            'icon-chevron-up-down': true
        }
    }
});

describe('CTreeView Component', () => {
    // Sample tree data for testing
    const treeItems = [
        {
            id: 'folder1',
            name: 'Folder 1',
            type: 'folder',
            children: [
                { id: 'file1', name: 'File 1.txt', type: 'file', extension: 'txt' },
                { id: 'file2', name: 'File 2.js', type: 'file', extension: 'js' }
            ]
        },
        {
            id: 'folder2',
            name: 'Folder 2',
            type: 'folder',
            children: []
        },
        { id: 'file3', name: 'File 3.json', type: 'file', extension: 'json' }
    ];

    beforeEach(() => {
        // Reset mocks
        vi.clearAllMocks();

        // Mock fetch for lazy loading
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([])
            })
        ) as any;
    });

    it('renders correctly with default props', () => {
        const wrapper = mount(CTreeView, {
            props: {
                items: []
            },
            ...createMountOptions()
        });

        expect(wrapper.find('.c-tree-view').exists()).toBe(true);
        expect(wrapper.find('.treeview-header').exists()).toBe(true);
        expect(wrapper.find('.treeview-content').exists()).toBe(true);
    });

    it('displays empty message when no items are provided', () => {
        const wrapper = mount(CTreeView, {
            props: {
                items: [],
                emptyMessage: 'Custom empty message'
            },
            ...createMountOptions()
        });

        expect(wrapper.find('.treeview-content').text()).toContain('Custom empty message');
    });

    it('renders tree items when provided', () => {
        const wrapper = mount(CTreeView, {
            props: {
                items: treeItems
            },
            ...createMountOptions()
        });

        // Because we're using a stubbed version, we need to check for .mock-tree-item instead
        const treeItemElements = wrapper.findAll('.mock-tree-item');
        expect(treeItemElements.length).toBe(3);
    });


    it('applies custom styling props correctly', () => {
        const wrapper = mount(CTreeView, {
            props: {
                items: [],
                elevated: true,
                borderColor: 'custom-border',
                bgColor: 'custom-bg',
                textColor: 'custom-text',
                contentHeight: '300px',
                maxHeight: '500px'
            },
            ...createMountOptions()
        });

        // Check that custom classes are applied
        expect(wrapper.find('.c-tree-view').classes()).toContain('shadow-md');
        expect(wrapper.find('.c-tree-view').classes()).toContain('custom-border');
        expect(wrapper.find('.treeview-content').classes()).toContain('custom-bg');
        expect(wrapper.find('.treeview-content').attributes('style')).toContain('height: 300px');
        expect(wrapper.find('.treeview-content').attributes('style')).toContain('max-height: 500px');
    });

    it('shows/hides action buttons based on props', () => {
        const wrapper = mount(CTreeView, {
            props: {
                items: [],
                showNewFileButton: true,
                showNewFolderButton: true,
                showRefreshButton: false,
                showCollapseAllButton: false
            },
            ...createMountOptions()
        });

        // Check buttons by title attributes
        expect(wrapper.find('[title="New File"]').exists()).toBe(true);
        expect(wrapper.find('[title="New Folder"]').exists()).toBe(true);
        expect(wrapper.find('[title="Refresh"]').exists()).toBe(false);
        expect(wrapper.find('[title="Collapse All"]').exists()).toBe(false);
    });

    it('emits new-file event when new file button is clicked', async () => {
        const wrapper = mount(CTreeView, {
            props: {
                items: []
            },
            ...createMountOptions()
        });

        await wrapper.find('[title="New File"]').trigger('click');

        expect(wrapper.emitted('new-file')).toBeTruthy();
    });

    it('emits new-folder event when new folder button is clicked', async () => {
        const wrapper = mount(CTreeView, {
            props: {
                items: []
            },
            ...createMountOptions()
        });

        await wrapper.find('[title="New Folder"]').trigger('click');

        expect(wrapper.emitted('new-folder')).toBeTruthy();
    });

    it('calls refreshTree when refresh button is clicked', async () => {
        const wrapper = mount(CTreeView, {
            props: {
                items: [],
                apiEndpoint: '/api/files'
            },
            ...createMountOptions()
        });

        // Spy on the fetch call instead of an event
        await wrapper.find('[title="Refresh"]').trigger('click');

        // Verify that fetch was called with the correct URL
        expect(global.fetch).toHaveBeenCalledWith('/api/files');
    });

    it('clears expandedNodes when collapseAll is called', async () => {
        const wrapper = mount(CTreeView, {
            props: {
                items: treeItems
            },
            ...createMountOptions()
        });

        // Directly add items to the expandedNodes Set
        wrapper.vm.expandedNodes.add('folder1');
        wrapper.vm.expandedNodes.add('folder2');

        // Verify our entries were added
        expect(wrapper.vm.expandedNodes.has('folder1')).toBe(true);
        expect(wrapper.vm.expandedNodes.has('folder2')).toBe(true);
        expect(wrapper.vm.expandedNodes.size).toBe(2);

        // Call the method directly
        wrapper.vm.collapseAll();

        // Check that expandedNodes is now empty
        expect(wrapper.vm.expandedNodes.size).toBe(0);
    });

    it('selects a node correctly', async () => {
        const wrapper = mount(CTreeView, {
            props: {
                items: treeItems
            },
            ...createMountOptions()
        });

        // Call selectNode method directly with a spy
        const selectNodeSpy = vi.spyOn(wrapper.vm, 'selectNode');

        wrapper.vm.selectNode(treeItems[0]);

        // Check that selectNode was called
        expect(selectNodeSpy).toHaveBeenCalledWith(treeItems[0]);

        // Check that select event is emitted
        expect(wrapper.emitted('select')).toBeTruthy();
    });

    it('toggles node expansion', async () => {
        const wrapper = mount(CTreeView, {
            props: {
                items: treeItems
            },
            ...createMountOptions()
        });

        const toggleNodeSpy = vi.spyOn(wrapper.vm, 'toggleNode');

        // Call toggleNode directly
        wrapper.vm.toggleNode(treeItems[0]);

        // Verify the method was called
        expect(toggleNodeSpy).toHaveBeenCalledWith(treeItems[0]);

        // Check that toggle event is emitted
        expect(wrapper.emitted('toggle')).toBeTruthy();
    });

    it('handles lazy loading correctly', async () => {
        const lazyNode = {
            id: 'lazyFolder',
            name: 'Lazy Folder',
            type: 'folder',
            lazy: true,
            loaded: false,
            children: []
        };

        const wrapper = mount(CTreeView, {
            props: {
                items: [lazyNode],
                lazyLoad: true,
                apiEndpoint: '/api/files'
            },
            ...createMountOptions()
        });

        // Mock the lazyLoadNode method
        const lazyLoadNodeSpy = vi.spyOn(wrapper.vm, 'lazyLoadNode');

        // Call lazyLoadNode directly instead of through toggleNode
        wrapper.vm.lazyLoadNode(lazyNode);

        // Verify the method was called
        expect(lazyLoadNodeSpy).toHaveBeenCalledWith(lazyNode);

        // Check that the fetch was called
        expect(global.fetch).toHaveBeenCalled();
    });
});
