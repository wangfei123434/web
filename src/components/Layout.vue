<template>
  <div style="display:flex;flex-direction:column;">
    <Header @winReload="winReload" style=""></Header>
    <div style="flex:1">
      <router-view :key="key" />
    </div>
    <Footer style=""></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "Layout",
  components: {
    Header,
    Footer
  },
  computed: {
    key() {
      return this.$router.path + Math.random();
    }
  },

  methods: {
    winReload(data) {
      location.reload();

      // setTimeout(() => {
      //   this.$router.push('/login')
      // }, 500);
    }
  }
};
</script>

<style scoped></style>
