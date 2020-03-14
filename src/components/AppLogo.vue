<template>
  <div class="logo">
    <a :href="baseUrl">LOGOTYPE</a>
  </div>
</template>

<script>
export default {
  computed: {
    baseUrl() {
      return typeof window.publicPath !== "undefined" ? window.publicPath : "/";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~scss/global";

.logo {
  a {
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    text-decoration: none;
    color: $links-color;
    display: block;
  }
}
</style>
