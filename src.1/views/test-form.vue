<template>
  <div>
    <h3>具有数据校验功能的表单组件——Form</h3>
    <i-form ref="form" :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
      <i-form-item label="性别" prop="checkbox">
        <i-checkbox-group v-model="formValidate.checkbox">
          <i-checkbox label="option1">选项 1</i-checkbox>
          <i-checkbox label="option2">选项 2</i-checkbox>
          <i-checkbox label="option3">选项 3</i-checkbox>
          <i-checkbox label="option4">选项 4</i-checkbox>
        </i-checkbox-group>
      </i-form-item>
      <i-form-item label="是否毕业" prop="radio">
        <i-radio-group v-model="formValidate.radio">
          <i-radio label="1">1</i-radio>
          <i-radio label="2">2</i-radio>
          <i-radio label="3">3</i-radio>
          <i-radio label="4">4</i-radio>
        </i-radio-group>
      </i-form-item>
    </i-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>
<script>
import iForm from "./Form.vue";
import iFormItem from "./FormItem";
import iInput from "./input.vue";
import iCheckbox from "../components/checkbox";
import iCheckboxGroup from "../components/checkbox-group";
import iRadio from "../components/radio";
import iRadioGroup from "../components/radio-group";

export default {
  components: {
    iForm,
    iFormItem,
    iInput,
    iCheckbox,
    iCheckboxGroup,
    iRadio,
    iRadioGroup
  },
  data() {
    return {
      formValidate: {
        name: "",
        mail: "",
        checkbox: "1",
        checkbox: ["option3"],
        radio: "1"
      },
      ruleValidate: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" }
        ],
        checkbox: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "change",
            type: "array"
          }
        ],
        radio: [
          {
            required: true,
            message: "请输入字符串",
            trigger: "change",
            type: "array"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          window.alert("提交成功");
        } else {
          window.alert("表单校验失败");
        }
      });
    },
    handleReset() {
      this.$refs.form.resetFields();
    }
  }
};
</script>
