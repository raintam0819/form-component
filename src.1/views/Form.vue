<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "iForm",
  provide() {
    return {
      form: this
    };
  },
  data() {
    return {
      fields: []
    };
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  methods: {
    // 公开方法： 全部重置数据
    resetFields() {
      this.fields.forEach(field => {
        field.resetFields();
      });
    },
    // 公开方法：全部校验数据，支持promise
    validate(callback) {
      return new Promise(reslove => {
        let valid = true;
        let count = 0;
        this.fields.forEach(field => {
          field.validate("", errors => {
            if (errors) {
              valid = false;
            }

            if (++count === this.fields.length) {
              // 全部完成
              reslove(valid);
              if (typeof callback === "function") {
                callback(valid);
              }
            }
          });
        });
      });
    }
  },
  created() {
    this.$on("on-form-item-add", field => {
      if (field) this.fields.push(field);
    });
    this.$on("on-form-item-remove", field => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
    });
  }
};
</script>

