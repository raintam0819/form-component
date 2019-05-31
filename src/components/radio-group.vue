<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Emitter from "../utils/emitter.js";
import { findComponentsDownward } from "../utils/assist";
export default {
  name: "iRadioGroup",
  mixins: [Emitter],
  props: {
    value: {
      type: [String, Boolean, Array]
    }
  },
  mounted() {
    this.radioList = findComponentsDownward(this, "iRadio");
  },
  data() {
    return {
      radioList: [],
      currentValue: this.value
    };
  },
  methods: {
    updateModel() {
      this.radioList.forEach(radio => {
        if (radio.label === this.currentValue) {
          radio.currentVal = true;
        } else {
          radio.currentVal = false;
        }
      });
    },
    change(radioObj) {
      console.log(radioObj);
      this.currentValue = radioObj.label;
      this.$emit("input", radioObj.label);
      this.$emit("on-change", radioObj.label);
      this.dispatch("iFormItem", "on-form-change", radioObj.label);
    }
  },
  watch: {
    currentValue() {
      this.updateModel();
    }
  }
};
</script>

