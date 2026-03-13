import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"

import DashboardPage from "../pages/DashboardPage.vue"

describe("DashboardPage.vue", () => {

  it("should render dashboard title", () => {

    const wrapper = mount(DashboardPage)

    expect(wrapper.text()).toContain("Factory Dashboard")

  })

})