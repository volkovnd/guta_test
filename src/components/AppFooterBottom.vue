<template>
  <div id="footer-bottom">
    <div class="container">
      <div class="copyright">
        © ООО «Глобус», 2016 — 2019
      </div>
      <div class="nav">
        <a v-for="(item, index) in navItems" :key="index" :href="item.link">
          {{ item.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          title: "Политика конфиденциальности",
          link: "/"
        },
        {
          title: "Cookies",
          link: "/"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~scss/global";

#footer-bottom {
  padding-top: 22px;
  padding-bottom: 23px;
  background-color: #001f2b;
}

.container {
  @include make-container();

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  font-size: 12px;
  line-height: 15px;
  color: #dce5e9;

  display: none;

  @media (min-width: 767px) {
    display: block;
  }
}

.nav {
  a {
    font-size: 12px;
    line-height: 15px;
    color: #dce5e9;
    text-decoration: none;

    & + a {
      margin-left: 30px;
    }
  }
}
</style>
