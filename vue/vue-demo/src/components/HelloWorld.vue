<template>
  <div class="hello">
    <h1>{{ hello }}</h1>
    <p>{{ html1 }}</p>
    <p v-html="html1"></p>
    <div :id="bind"></div>
    <p>{{ inc + 1 }}</p>
    <p>{{ baa ? "齐天大圣" : "六耳泥猴" }}</p>
    <p v-if="fla">我是孙猴子</p>
    <p v-else>你是傻猴子</p>
    <h1 v-show="ok">hello1</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
    <button @click="counter += 1">Add{{ counter }}</button>
    <button @click="counter1($event)">{{AAA}}{{ counter }}</button>
    <button @click="ii1(1)">11{{ counter }}</button>
    <button @click="ii1(2)">22{{ counter }}</button>
    
    <input type="text" v-model.lazy.trim="mess" >
    <button @click="getUserName">获取用户名</button>
    <p>{{ mess }}</p>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      hello: "hello,VUE",
      html1: '<a href="https://www.itbaizhan.com">百战</a>',
      bind: "1222",
      inc: "12",
      baa: true,
      fla: false,
      ok: true,
      items: [
        {
          id: 1,
          name: "li1",
        },
        {
          id: 2,
          name: "li2",
        },
        {
          id: 3,
          name: "li3",
        },
      ],
      counter: 1,
      AAA: "打印",
      mess: "",
    };
  },

  methods: {
    counter1(event) {
      this.counter += 1;
      console.log(12);
      console.log(event);
      this.items[1].name = "liuke";
      event.target.innerHTML = "打印后";
      console.log(this.AAA);
      // this.AAA = "打印后";
    },
    ii1(YYY) {
      alert(YYY);
    },
    getUserName() {
      console.log(this.mess);    },
  },
};
</script>

