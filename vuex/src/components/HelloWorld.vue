<template>
  <div class="hello">
    <p>count = {{ this.getcount }}</p>
    <button @click="click">添加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "HelloWorld",
  computed: {
    ...mapGetters(["getcount"]),
  },
  methods: {
    ...mapMutations(["setCount"]),
    click() {
      // this.$store.commit("setCount", 10);
      this.setCount(100)
    },
  },
};


</script>

