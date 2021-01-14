<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <a-button @click="onGet">测试</a-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    onGet() {
      console.log("ok");
      var vm = this;
      vm.$http
        .get("http://www.baidu.com")
        .then(function(data) {
          console.log(data);
        })
        .catch(function(resp) {
          console.log(resp);
        });
    }
  }
};
</script>
