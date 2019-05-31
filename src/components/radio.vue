<template>
  <label>
    <span>
      <input type="radio" @change="handleChange" :checked="currentVal">
    </span>
    <slot></slot>
  </label>
</template>

<script>
import Emitter from "../utils/emitter.js";
import { findComponentUpward } from "../utils/assist";
export default {
  name: "iRadio",
  mixins: [Emitter],
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number, Boolean]
    },
    checkedVal: {
      type: [String, Number, Boolean],
      default: true
    },
    uncheckedVal: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  mounted() {
    this.parent = findComponentUpward(this, "iRadioGroup");

    if (this.parent) {
      this.group = true;
    }
  },
  data() {
    return {
      currentVal: this.value,
      group: false,
      parent: null
    };
  },
  methods: {
    handleChange(e) {
      this.currentVal = e.target.checked;
      let value = this.currentVal ? this.checkedVal : this.uncheckedVal;
      // 和外层使用v-model绑定
      this.$emit("input", value);
      if (this.group) {
        this.parent.change({
          label: this.label,
          value: value
        });
      } else {
        // 向FormItem抛出时间来进行校验
        this.dispatch("iFormItem", "on-form-change", value);
      }
    }
  }
};
</script>

