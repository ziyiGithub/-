<template>
  <div>
    <p>{{ name }}</p>
    <ul>
      <li v-for="(item, index) in state.list" :key="index">
        {{ item }}
      </li>
    </ul>
    <button @click="click">修改消息</button>
    <h1>{{ name1 }}</h1>
    <h1>{{ msg }}</h1>
    <h2>{{ a }}</h2>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { inject } from "vue";

export default {
  name: "HelloWorld",
  props: {
    name1: "string",
    msg: "string",
    event: "string",
  },
  emits: ["event"],

  setup(props, ctx) {
    onMounted(() => {
      console.log("123132");
    });
    console.log(ctx);
    console.log(props.name1);
    var msg = props.msg;
    ctx.emit("event");

    const name1 = props.name1;

    const name = ref("iwe");
    const state = reactive({
      list: [1, 2, 3, 4, "收拾一下哈"],
    });
    function click() {
      name.value = "wsxin";
    }
    var a = inject("ab");

    return {
      name,
      state,
      click,
      name1,
      msg,
      a,
    };
  },
};
</script>

