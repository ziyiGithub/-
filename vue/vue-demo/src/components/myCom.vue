<template>
  <div>
    <h3>单文件组件</h3>
    <p>{{ title }}</p>
    <ul>
        <li v-for="(item,index) in arr1" :key="index">{{item}}</li>
    </ul>

    <button @click="dianji">点击传输</button>
  </div>
</template>

<script>
export default {
  name: "myCom",
  props: {
    title: {
      type: String,
      default: "",
    },
    arr1: {
        type: Array,
        default: function() {
            return ["结束吧"]
        }
    }
  },
  methods:{

    dianji(){
        this.$emit("onclick","数据")
    }
  }
};
</script>

<style>
h3 {
  color: black;
}
</style>