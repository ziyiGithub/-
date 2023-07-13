<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <my-com :title="title" :arr1="arr1" @onclick="getData" />
    <!-- <HelloWorld /> -->
    <p>{{ data1 }}</p>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import myCom from "./components/myCom.vue";
export default {
  name: "App",
  data() {
    return {
      title: "总是觉得自己不够好",
      arr1: ["现在", "不会", "了"],
      data1:"1"
    };
  },

  components: {
    myCom,
    // HelloWorld,
  },
  methods: {
    getData(data) {
      console.log(data);
      this.data1 = data;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
