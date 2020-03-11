<template>
  <div id="app">
    <AppTop />
    <AppHeader />
    <AppSlider />
    <AppAbout />
    <AppNews />
    <AppForm />
    <AppFooter />
  </div>
</template>

<script>
import AppTop from "./AppTop";
import AppHeader from "./AppHeader";
import AppSlider from "./AppSlider";
import AppAbout from "./AppAbout";
import AppNews from "./AppNews";
import AppForm from "./AppForm";
import AppFooter from "./AppFooter";

export default {
  components: {
    AppTop,
    AppHeader,
    AppSlider,
    AppAbout,
    AppNews,
    AppForm,
    AppFooter
  }
};
</script>

<style lang="scss">
@import "~normalize.css/normalize.css";
` html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-family: Montserrat, sans-serif;
  font-weight: 400;
}

* {
  box-sizing: border-box;
}

@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap");

#app {
  padding-top: 68px;

  @media (min-width: 767px) {
    padding-top: 140px;
  }
}
</style>
