<template>
  <div>
    <tree-node
      v-for="(item, index) in clonData"
      :key="index"
      :data="item"
      :show-checkbox="showCheckbox"
    ></tree-node>
  </div>
</template>

<script>
import TreeNode from "./node.vue";
import { deepCopy } from "../../utils/assist";
export default {
  name: "Tree",
  components: { TreeNode },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cloneData: []
    };
  },
  created() {},
  watch: {
    data: {
      handler: this.rebuilData(),
      immediate: true
    }
  },
  methods: {
    rebuilData() {
      this.cloneData = deepCopy(this.data);
    },
    emitEvent(eventName, data) {
      this.$emit(eventName, data, this.cloneData);
    }
  }
};
</script>

