import { mount, flushPromises } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach } from "vitest";
import CImage from "../../src/components/components/CImage.vue";
import CLoader from "../../src/components/components/CLoader.vue";

// Mock CLoader component
vi.mock("../../src/components/components/CLoader.vue", () => ({
    default: {
        name: "CLoader",
        template: "<div class='mock-loader'></div>",
        props: {
            size: String,
            color: String
        }
    }
}));

// Mock IconExclamationCircle component
vi.mock("@components/icons/IconExclamationCircle.vue", () => ({
    default: {
        name: "IconExclamationCircle",
        template: "<div class='mock-error-icon'></div>"
    }
}));

describe("CImage Component", () => {
    // Helper to create an image element
    const createImage = (src = "test-image.jpg", success = true) => {
        const img = new Image();

        // Mock Image constructor
        Object.defineProperty(window, "Image", {
            writable: true,
            configurable: true,
            value: vi.fn(() => img)
        });

        // Add mocked properties
        img.src = src;

        // Simulate loading
        setTimeout(() => {
            if (success) {
                if (typeof img.onload === 'function') {
                    img.onload();
                } else {
                    const event = new Event('load');
                    img.dispatchEvent(event);
                }
            } else {
                if (typeof img.onerror === 'function') {
                    img.onerror();
                } else {
                    const event = new Event('error');
                    img.dispatchEvent(event);
                }
            }
        }, 100);

        return img;
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders correctly with default props", async () => {
        // Create a proper mock for the Image constructor
        const mockImage = {
            onload: null,
            onerror: null,
            src: null
        };

        // Mock the Image constructor to return our controlled mock
        Object.defineProperty(window, "Image", {
            writable: true,
            configurable: true,
            value: vi.fn(() => mockImage)
        });

        const wrapper = mount(CImage, {
            props: {
                src: "test-image.jpg",
                alt: "Test image"
            }
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.select-none').exists()).toBe(true);

        const container = wrapper.find('.select-none');

        expect(container.classes()).toContain('select-none');

        expect(wrapper.find("img").exists()).toBe(true);
        expect(wrapper.vm.loading).toBe(true);

        mockImage.onload();

        await wrapper.vm.$nextTick();

        expect(wrapper.vm.loading).toBe(false);
    });

    it("renders with responsive class when responsive is true", () => {
        createImage();
        const wrapper = mount(CImage, {
            props: {
                src: "test-image.jpg",
                responsive: true
            }
        });

        expect(wrapper.find("img").classes()).toContain("w-full");
    });

    it("applies rounded classes correctly", () => {
        createImage();
        const wrapper = mount(CImage, {
            props: {
                src: "test-image.jpg",
                rounded: "full"
            }
        });

        expect(wrapper.find("img").classes()).toContain("rounded-full");
    });

    it("applies object-fit classes correctly", () => {
        createImage();
        const wrapper = mount(CImage, {
            props: {
                src: "test-image.jpg",
                cover: true
            }
        });

        expect(wrapper.find("img").classes()).toContain("object-cover");
    });

    it("applies contain object-fit class when contain prop is true", () => {
        createImage();
        const wrapper = mount(CImage, {
            props: {
                src: "test-image.jpg",
                contain: true
            }
        });

        expect(wrapper.find("img").classes()).toContain("object-contain");
    });

    it("displays loader when showLoader is true and image is loading", () => {
        createImage();
        const wrapper = mount(CImage, {
            props: {
                src: "test-image.jpg",
                showLoader: true
            }
        });

        expect(wrapper.find(".mock-loader").exists()).toBe(true);
    });

    it("displays error when image fails to load", async () => {
        // Create a proper mock for the Image constructor
        const mockImage = {
            onload: null,
            onerror: null,
            src: null
        };

        // Mock the Image constructor to return our controlled mock
        Object.defineProperty(window, "Image", {
            writable: true,
            configurable: true,
            value: vi.fn(() => mockImage)
        });

        const wrapper = mount(CImage, {
            props: {
                src: "bad-image.jpg"
            }
        });

        // Manually trigger the onerror handler that component assigned
        mockImage.onerror();

        // Wait for Vue to process updates
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.error).toBe(true);
        expect(wrapper.find(".mock-error-icon").exists()).toBe(true);
        expect(wrapper.text()).toContain("Failed to load image");
    });

    it("displays custom error text", async () => {
        // Create a proper mock for the Image constructor
        const mockImage = {
            onload: null,
            onerror: null,
            src: null
        };

        // Mock the Image constructor to return our controlled mock
        Object.defineProperty(window, "Image", {
            writable: true,
            configurable: true,
            value: vi.fn(() => mockImage)
        });

        const wrapper = mount(CImage, {
            props: {
                src: "bad-image.jpg",
                errorText: "Custom error message"
            }
        });

        // Manually trigger the onerror handler that component assigned
        mockImage.onerror();

        // Wait for Vue to process updates
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.error).toBe(true);
        expect(wrapper.text()).toContain("Custom error message");
    });

    it("displays caption when provided", () => {
        createImage();
        const wrapper = mount(CImage, {
            props: {
                src: "test-image.jpg",
                caption: "Image caption"
            }
        });

        expect(wrapper.text()).toContain("Image caption");
    });

    it("renders as gallery with multiple images", () => {
        createImage();
        const wrapper = mount(CImage, {
            props: {
                src: ["image1.jpg", "image2.jpg", "image3.jpg"]
            }
        });

        expect(wrapper.findAll(".flex-shrink-0").length).toBe(3);
    });

    it("shows gallery controls when showGalleryControls is true", () => {
        createImage();
        const wrapper = mount(CImage, {
            props: {
                src: ["image1.jpg", "image2.jpg"],
                showGalleryControls: true
            }
        });

        // Initially only next button should be visible (since we're at index 0)
        expect(wrapper.find('[aria-label="Next image"]').exists()).toBe(true);
        expect(wrapper.find('[aria-label="Previous image"]').exists()).toBe(false);
    });

    it("shows gallery indicators when showGalleryIndicators is true", () => {
        createImage();
        const wrapper = mount(CImage, {
            props: {
                src: ["image1.jpg", "image2.jpg", "image3.jpg"],
                showGalleryIndicators: true
            }
        });

        const indicators = wrapper.findAll(".flex.space-x-1\\.5 > div");
        expect(indicators.length).toBe(3);
    });

    it("changes gallery image when next/prev buttons are clicked", async () => {
        createImage();
        const wrapper = mount(CImage, {
            props: {
                src: ["image1.jpg", "image2.jpg", "image3.jpg"]
            }
        });

        const nextButton = wrapper.find('[aria-label="Next image"]');
        await nextButton.trigger("click");

        expect(wrapper.vm.currentGalleryIndex).toBe(1);
        expect(wrapper.find('[aria-label="Previous image"]').exists()).toBe(true);

        await wrapper.find('[aria-label="Previous image"]').trigger("click");
        expect(wrapper.vm.currentGalleryIndex).toBe(0);
    });

    it("emits change event when gallery image changes", async () => {
        createImage();
        const wrapper = mount(CImage, {
            props: {
                src: ["image1.jpg", "image2.jpg", "image3.jpg"]
            }
        });

        await wrapper.find('[aria-label="Next image"]').trigger("click");

        expect(wrapper.emitted().change).toBeTruthy();
        expect(wrapper.emitted().change[0]).toEqual([1]);
    });

    it("starts at specified startIndex", () => {
        createImage();
        const wrapper = mount(CImage, {
            props: {
                src: ["image1.jpg", "image2.jpg", "image3.jpg"],
                startIndex: 1
            }
        });

        expect(wrapper.vm.currentGalleryIndex).toBe(1);
    });

    it("applies custom class correctly", () => {
        createImage();
        const wrapper = mount(CImage, {
            props: {
                src: "test-image.jpg",
                customClass: "test-custom-class"
            }
        });

        const hasCustomClass = wrapper.classes().includes('test-custom-class') ||
            wrapper.find('.test-custom-class').exists();
        expect(hasCustomClass).toBe(true);
    });

    it("applies aspect ratio style correctly", () => {
        createImage();
        const wrapper = mount(CImage, {
            props: {
                src: "test-image.jpg",
                aspectRatio: 16 / 9
            }
        });

        const containerDiv = wrapper.find('.select-none');
        expect(containerDiv.exists()).toBe(true);

        const hasAspectRatio = containerDiv.attributes('style')?.includes('aspect-ratio') ||
            containerDiv.attributes('style')?.includes('padding-bottom');
        expect(hasAspectRatio).toBe(true);
    });

    it("emits load event when image loads successfully", async () => {
        // Create a proper mock for the Image constructor
        const mockImage = {
            onload: null,
            onerror: null,
            src: null
        };

        // Mock the Image constructor to return our controlled mock
        Object.defineProperty(window, "Image", {
            writable: true,
            configurable: true,
            value: vi.fn(() => mockImage)
        });

        const wrapper = mount(CImage, {
            props: {
                src: "test-image.jpg"
            }
        });

        // Manually trigger the onload handler that component assigned
        mockImage.onload();

        // Wait for Vue to process updates
        await wrapper.vm.$nextTick();

        expect(wrapper.emitted()).toHaveProperty('load');
        expect(wrapper.emitted().load).toBeTruthy();
    });

    it("emits error event when image fails to load", async () => {
        // Create a proper mock for the Image constructor
        const mockImage = {
            onload: null,
            onerror: null,
            src: null
        };

        // Mock the Image constructor to return our controlled mock
        Object.defineProperty(window, "Image", {
            writable: true,
            configurable: true,
            value: vi.fn(() => mockImage)
        });

        const wrapper = mount(CImage, {
            props: {
                src: "bad-image.jpg"
            }
        });

        // Manually trigger the onerror handler that component assigned
        mockImage.onerror();

        // Wait for Vue to process updates
        await wrapper.vm.$nextTick();

        expect(wrapper.emitted()).toHaveProperty('error');
        expect(wrapper.emitted().error).toBeTruthy();
    });
});
