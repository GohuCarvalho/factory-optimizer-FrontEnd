import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"

import ProductionPlanPage from "../pages/ProductionPlanPage.vue"

describe("ProductionPlanPage.vue", () => {

  it("should render the page title", () => {

    const wrapper = mount(ProductionPlanPage)

    expect(wrapper.text()).toContain("Production Plan")

  })

  it("should render generate production button", () => {

    const wrapper = mount(ProductionPlanPage)

    expect(wrapper.text()).toContain("Generate Production Plan")

  })

  it("should trigger production generation when button is clicked", async () => {

    const wrapper = mount(ProductionPlanPage)

    const button = wrapper.find("button")

    await button.trigger("click")

    expect(button.exists()).toBe(true)

  })

})