import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"

import BaseTable from "../components/base/BaseTable.vue"

describe("BaseTable.vue", () => {

  const columns = [
    { key: "name", label: "Name" }
  ]

  it("should render empty state when there is no data", () => {

    const wrapper = mount(BaseTable, {
      props: {
        columns,
        data: []
      }
    })

    expect(wrapper.text()).toContain("No records")

  })

  it("should render table rows when data exists", () => {

    const wrapper = mount(BaseTable, {
      props: {
        columns,
        data: [{ name: "Steel" }]
      }
    })

    expect(wrapper.text()).toContain("Steel")

  })

})