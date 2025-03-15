import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import CTreeViewContextMenu from '../../src/components/editor/CTreeViewContextMenu.vue';

describe('CTreeViewContextMenu Component', () => {
    // Sample node for testing
    const fileNode = {
        id: 'file1',
        name: 'test.txt',
        path: '/folder/test.txt',
        type: 'file',
        extension: 'txt',
        meta: {
            size: 1024,
            modified: '2023-01-01T12:00:00Z'
        }
    };

    const folderNode = {
        id: 'folder1',
        name: 'Test Folder',
        path: '/folder',
        type: 'folder',
        children: []
    };

    beforeEach(() => {
        // Mock document methods
        document.addEventListener = vi.fn();
        document.removeEventListener = vi.fn();

        // Mock element to handle getBoundingClientRect
        vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(() => ({
            width: 200,
            height: 300,
            top: 50,
            left: 50,
            right: 250,
            bottom: 350,
            x: 50,
            y: 50
        }));

        // Reset body content
        document.body.innerHTML = '';

        // Mock window dimensions
        Object.defineProperty(window, 'innerWidth', { value: 1024, writable: true });
        Object.defineProperty(window, 'innerHeight', { value: 768, writable: true });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('renders correctly with file node', () => {
        const wrapper = mount(CTreeViewContextMenu, {
            props: {
                x: 100,
                y: 100,
                node: fileNode,
                clipboard: null,
                showInfo: true
            },
            global: {
                stubs: {
                    'icon-file-open': true,
                    'icon-pencil': true,
                    'icon-trash': true,
                    'icon-scissors': true,
                    'icon-duplicate': true,
                    'icon-clipboard': true,
                    'icon-file-plus': true,
                    'icon-folder-plus': true
                }
            }
        });

        expect(wrapper.find('.context-menu').exists()).toBe(true);
        expect(wrapper.text()).toContain('Open');
        expect(wrapper.text()).toContain('Rename');
        expect(wrapper.text()).toContain('Delete');
        expect(wrapper.text()).toContain('Cut');
        expect(wrapper.text()).toContain('Copy');

        // File node info should be displayed
        expect(wrapper.text()).toContain('test.txt');
        expect(wrapper.text()).toContain('/folder/test.txt');
    });

    it('renders correctly with folder node', () => {
        const wrapper = mount(CTreeViewContextMenu, {
            props: {
                x: 100,
                y: 100,
                node: folderNode,
                clipboard: null,
                showInfo: true
            },
            global: {
                stubs: {
                    'icon-file-open': true,
                    'icon-pencil': true,
                    'icon-trash': true,
                    'icon-scissors': true,
                    'icon-duplicate': true,
                    'icon-clipboard': true,
                    'icon-file-plus': true,
                    'icon-folder-plus': true
                }
            }
        });

        expect(wrapper.find('.context-menu').exists()).toBe(true);
        expect(wrapper.text()).not.toContain('Open'); // No open for folders
        expect(wrapper.text()).toContain('Rename');
        expect(wrapper.text()).toContain('Delete');
        expect(wrapper.text()).toContain('Cut');
        expect(wrapper.text()).toContain('Copy');
        expect(wrapper.text()).toContain('New File');
        expect(wrapper.text()).toContain('New Folder');

        // Folder node info should be displayed
        expect(wrapper.text()).toContain('Test Folder');
        expect(wrapper.text()).toContain('/folder');
    });

    it('disables paste when there is no clipboard data', () => {
        const wrapper = mount(CTreeViewContextMenu, {
            props: {
                x: 100,
                y: 100,
                node: folderNode,
                clipboard: null
            },
            global: {
                stubs: {
                    'icon-file-open': true,
                    'icon-pencil': true,
                    'icon-trash': true,
                    'icon-scissors': true,
                    'icon-duplicate': true,
                    'icon-clipboard': true,
                    'icon-file-plus': true,
                    'icon-folder-plus': true
                }
            }
        });

        // Find paste button by text content
        const pasteButtons = wrapper.findAll('button').filter(button => {
            return button.text().includes('Paste');
        });

        expect(pasteButtons.length).toBeGreaterThan(0);
        const pasteButton = pasteButtons[0];
        expect(pasteButton.attributes('disabled')).toBeDefined();
        expect(pasteButton.classes()).toContain('opacity-50');
    });

    it('enables paste when there is clipboard data and target is a folder', () => {
        const wrapper = mount(CTreeViewContextMenu, {
            props: {
                x: 100,
                y: 100,
                node: folderNode,
                clipboard: {
                    node: fileNode,
                    operation: 'copy'
                }
            },
            global: {
                stubs: {
                    'icon-file-open': true,
                    'icon-pencil': true,
                    'icon-trash': true,
                    'icon-scissors': true,
                    'icon-duplicate': true,
                    'icon-clipboard': true,
                    'icon-file-plus': true,
                    'icon-folder-plus': true
                }
            }
        });

        // Find paste button by text content
        const pasteButtons = wrapper.findAll('button').filter(button => {
            return button.text().includes('Paste');
        });

        expect(pasteButtons.length).toBeGreaterThan(0);
        const pasteButton = pasteButtons[0];
        expect(pasteButton.attributes('disabled')).toBeUndefined();
        expect(pasteButton.classes()).not.toContain('opacity-50');
    });

    it('emits close event when escape key is pressed', async () => {
        const wrapper = mount(CTreeViewContextMenu, {
            props: {
                x: 100,
                y: 100,
                node: fileNode,
                clipboard: null
            },
            global: {
                stubs: {
                    'icon-file-open': true,
                    'icon-pencil': true,
                    'icon-trash': true,
                    'icon-scissors': true,
                    'icon-duplicate': true,
                    'icon-clipboard': true,
                    'icon-file-plus': true,
                    'icon-folder-plus': true
                }
            }
        });

        // Use our spy to call the handleKeyDown method directly
        wrapper.vm.handleKeyDown({ key: 'Escape' });

        expect(wrapper.emitted('close')).toBeTruthy();
    });

    it('emits action events when buttons are clicked', async () => {
        const wrapper = mount(CTreeViewContextMenu, {
            props: {
                x: 100,
                y: 100,
                node: fileNode,
                clipboard: null
            },
            global: {
                stubs: {
                    'icon-file-open': true,
                    'icon-pencil': true,
                    'icon-trash': true,
                    'icon-scissors': true,
                    'icon-duplicate': true,
                    'icon-clipboard': true,
                    'icon-file-plus': true,
                    'icon-folder-plus': true
                }
            }
        });

        // Find rename button by text content
        const renameButtons = wrapper.findAll('button').filter(button => {
            return button.text().includes('Rename');
        });

        expect(renameButtons.length).toBeGreaterThan(0);
        await renameButtons[0].trigger('click');

        expect(wrapper.emitted('rename')).toBeTruthy();
        expect(wrapper.emitted('close')).toBeTruthy();
    });

    it('formats file size correctly', () => {
        const wrapper = mount(CTreeViewContextMenu, {
            props: {
                x: 100,
                y: 100,
                node: {
                    ...fileNode,
                    meta: { size: 2048 }
                },
                clipboard: null,
                showInfo: true
            },
            global: {
                stubs: {
                    'icon-file-open': true,
                    'icon-pencil': true,
                    'icon-trash': true,
                    'icon-scissors': true,
                    'icon-duplicate': true,
                    'icon-clipboard': true,
                    'icon-file-plus': true,
                    'icon-folder-plus': true
                }
            }
        });

        expect(wrapper.text()).toContain('2 KB');
    });

    it('handles date formatting', () => {
        // We can't directly test the exact formatted date since it depends on locale
        // So we'll just check that some date information is displayed
        const date = new Date('2023-01-01T12:00:00Z');
        const wrapper = mount(CTreeViewContextMenu, {
            props: {
                x: 100,
                y: 100,
                node: {
                    ...fileNode,
                    meta: { modified: date.toISOString() }
                },
                clipboard: null,
                showInfo: true
            },
            global: {
                stubs: {
                    'icon-file-open': true,
                    'icon-pencil': true,
                    'icon-trash': true,
                    'icon-scissors': true,
                    'icon-duplicate': true,
                    'icon-clipboard': true,
                    'icon-file-plus': true,
                    'icon-folder-plus': true
                }
            }
        });

        // Just verify some date info is displayed (year or time)
        expect(wrapper.text()).toContain('2023');
    });

    it('emits close event on click outside', () => {
        const wrapper = mount(CTreeViewContextMenu, {
            props: {
                x: 100,
                y: 100,
                node: fileNode,
                clipboard: null
            },
            attachTo: document.body,
            global: {
                stubs: {
                    'icon-file-open': true,
                    'icon-pencil': true,
                    'icon-trash': true,
                    'icon-scissors': true,
                    'icon-duplicate': true,
                    'icon-clipboard': true,
                    'icon-file-plus': true,
                    'icon-folder-plus': true
                }
            }
        });

        // Get the handleClickOutside method
        const clickHandler = document.addEventListener.mock.calls.find(
            call => call[0] === 'click'
        )[1];

        // Simulate a click outside
        clickHandler({ target: document.body });

        expect(wrapper.emitted('close')).toBeTruthy();
    });
});
