思路整理

1. 因组件开发不能引入如 vuex 或 bus 等第三方依赖包，估借鉴 vue1.x 的 dispatch 和 broadcase 来进行跨多层组件之间的传递。利用递归向上或向下找到对应的组件并通过$emit触发和$on 监听事件
2. 抽离出 Form，FormItem, Input。通过互相直接的事件监听来实现。通过 dispatch 来是实现在 iForm 中缓存每一个 iFormItem（销毁时则清除缓存）。iFormItem 通过 provide/inject 来读取 form 里的 model 和 rules，并借助 async-validator 来进行校验。input 则和对应的 iFormItem 进行值得传输。
3. 组件开发尽量把单独组件的逻辑在组件内书写，需要和外部通讯的则分发对应的事件。
4. alert.vue 组件里使用数组进行 alert 渲染的维护，notification 使用 new Vue 和\$mount 来渲染和挂摘 alert 实例。
