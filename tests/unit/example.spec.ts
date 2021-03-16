import { shallowMount } from "@vue/test-utils";
import HierarchyTable from "@/components/hierarchy-table/hierarchy-table.vue";

describe("HierarchyTable.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HierarchyTable, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
