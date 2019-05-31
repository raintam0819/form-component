<template>
  <input type="text" :value="currentValue" @input="handleInput" @blur="handleBlur">
</template>

<script>
import Emitter from "../utils/emitter";
export default {
  name: "iInput",
  mixins: [Emitter],
  data() {
    return {
      currentValue: this.value
    };
  },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    }
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit("input", value);
      this.dispatch("iFormItem", "on-form-change", value);
    },
    handleBlur() {
      this.dispatch("iFormItem", "on-form-blur", this.currentValue);
    }
  }
};
</script>

