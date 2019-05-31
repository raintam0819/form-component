<template>
  <div>
    <tree :data="data" :show-checkbox="true"></tree>
  </div>
</template>

<script>
/**
 * 树组件开发思路，递归组件渲染节点，生成树结构。
 * 功能点解析：
 * 1.节点展开和收起，实际上是通过父节点的expand来移除或显示子节点来实现效果
 * 2.向下全选/反选节点，通过父节点递归并设置对应的checked
 * 3.向上联通选定/不选定效果，监听当前节点的children属性来判断是否checkAll，如果全选则自身节点也设置checkAll，则再上级就通过此属性达成联动效果
 * 4.往最外层抛出事件，选定最外层tree的组件，手动触发对应的事件。组件使用就能监听对应的操作，如on-node-change,on-toggle-expand等
 */
import Tree from "./node.vue";
export default {
  name: "TreeDemo",
  components: { Tree },
  data() {
    return {
      data: {
        title: "parent 1",
        expand: true,
        children: [
          {
            title: "parent 1-1",
            expand: true,
            render: (h, { data }) => {
              console.log(data.title);
              return h("h3", [data.title]);
            },
            children: [
              {
                title: "leaf 1-1-1"
              },
              {
                title: "leaf 1-1-2"
              }
            ]
          },
          {
            title: "parent 1-2",
            children: [
              {
                title: "leaf 1-2-1"
              },
              {
                title: "leaf 1-2-1"
              }
            ]
          }
        ]
      }
    };
  }
};
</script>


