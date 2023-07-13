<template>
  <div class="hello">
    <swiper
      class="mySwiper"
      :modules="modules"
      :pagination="{ clickable: true }"
    >
      <swiper-slide>
        <img src="../assets/1.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/1.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/1.png" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import qs from "qs";

export default {
  name: "HelloWorld",
  data() {
    return {
      modules: [Pagination],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },

  methods: {
    fetchData() {
      this.$axios
        .get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
        .then((res) => {
          console.log(res.data);
        });
        this.$axios
          .post(
            "http://iwenwiki.com/api/blueberrypai/login.php",
            qs.stringify({
              user_id: "iwen@qq.com",
              password: "iwen123",
              verification_code: "crfvw",
            })
          )
          .then((res) => {
            console.log(res.data);
          });
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
</style>
