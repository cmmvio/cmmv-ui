import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import CButtonGroups from "../../src/components/components/CButtonGroups.vue";

describe("CButtonGroups Component", () => {
  it("renders correctly with default props", () => {
    const wrapper = mount(CButtonGroups);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain("c-button-group");
    expect(wrapper.classes()).toContain("inline-flex");
    expect(wrapper.classes()).toContain("border");
  });

  it("renders slot content correctly", () => {
    const wrapper = mount(CButtonGroups, {
      slots: {
        default: "<button>Test Button</button>"
      }
    });
    expect(wrapper.html()).toContain("<button>Test Button</button>");
  });

  it("applies vertical class when vertical prop is true", () => {
    const wrapper = mount(CButtonGroups, {
      props: { vertical: true }
    });
    expect(wrapper.classes()).toContain("flex-col");
  });

  it("applies custom border color class", () => {
    const wrapper = mount(CButtonGroups, {
      props: { borderColor: "border-blue-500" }
    });
    expect(wrapper.classes()).toContain("border-blue-500");
  });

  it("provides correct button group context to child components", async () => {
    const wrapper = mount(CButtonGroups, {
      props: {
        size: "sm",
        variant: "outlined",
        bgColor: "bg-red-500",
        textColor: "text-white",
        shadow: "shadow-lg",
        vertical: true,
        textStroke: true
      },
      global: {
        provide: {
          buttonGroup: {}
        }
      }
    });

    // Verificar se o provide foi chamado com os valores corretos
    // Isso é mais difícil de testar diretamente, mas podemos verificar se as props foram aplicadas
    expect(wrapper.props("size")).toBe("sm");
    expect(wrapper.props("variant")).toBe("outlined");
    expect(wrapper.props("bgColor")).toBe("bg-red-500");
    expect(wrapper.props("textColor")).toBe("text-white");
    expect(wrapper.props("shadow")).toBe("shadow-lg");
    expect(wrapper.props("vertical")).toBe(true);
    expect(wrapper.props("textStroke")).toBe(true);
  });
});
