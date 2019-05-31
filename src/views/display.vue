<template>
  <div>
    <h3>动态渲染 .vue文件的组件——— Display</h3>

    <i-display :code="code"></i-display>
  </div>
</template>

<script>
import iDisplay from "../components/display";
import defalutCode from "./defalut-code.js";
export default {
  components: { iDisplay },
  data() {
    return {
      code: defalutCode
    };
  }
};
</script>

