<template>
  <ul class="tree-ul">
    <li class="tree-li">
      <span class="tree-expand" @click="handleExpand">
        <span v-if="data.children && data.children.length &&!data.expand">+</span>
        <span v-if="data.children && data.children.length &&data.expand">-</span>
      </span>
      <i-checkbox v-if="showCheckbox" :value="data.checked" @input="handleCheck"></i-checkbox>
      <template v-if="data.render">
        <Render :data="data" :render="data.render"></Render>
      </template>
      <span v-else>{{data.title}}</span>
      <tree-node
        v-if="data.expand"
        v-for="(item, index) in data.children"
        :key="index"
        :data="item"
        :show-checkbox="showCheckbox"
      ></tree-node>
    </li>
  </ul>
</template>

<script>
import iCheckbox from "../checkbox";
import { findComponentUpward } from "../../utils/assist.js";
import Render from "../table-render/render";
export default {
  name: "TreeNode",
  components: { iCheckbox, Render },
  data() {
    return {
      tree: findComponentUpward(this, "Tree")
    };
  },
  watch: {
    "data.children": {
      handler(data) {
        if (data) {
          const checkAll = !data.some(item => !item.checked);
          this.$set(this.data, "checked", checkAll);
        }
      },
      deep: true
    }
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleExpand() {
      this.$set(this.data, "expand", !this.data.expand);

      if (this.tree) {
        this.tree.emitEvent("on-toggle-expand", this.data);
      }
    },
    handleCheck(checked) {
      this.updateTreeDown(this.data, checked);
      if (this.tree) {
        this.tree.emitEvent("on-check-change", this.data);
      }
    },
    updateTreeDown(data, checked) {
      this.$set(data, "checked", checked);

      if (data.children && data.children.length) {
        data.children.forEach(item => {
          this.updateTreeDown(item, checked);
        });
      }
    }
  }
};
</script>

<style>
.tree-ul,
.tree-li {
  list-style: none;
  padding-left: 10px;
}
.tree-expand {
  cursor: pointer;
}
</style>