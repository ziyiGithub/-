<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <HelloWorld name1="Welcome to Your Vue.js App" msg="123" />
    <button @click="event"></button>
    <p>asdad</p>
  </nav>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { provide } from "vue";

export default {
  name: "APP",
  components: {
    HelloWorld,
  },
  setup(){
    provide("ab","床笫信息");
  }
};
</script>
