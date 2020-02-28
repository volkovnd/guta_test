<template>
  <div id="top">
    <div class="container">
      <div id="top-menu">
        <a href="/">Режим работы</a>
        <a href="/">Правила посещения</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/global";

#top {
    background-color: #dce5e9;
}

.container {
    @include make-container();
}

#top-menu {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
}

a {
    color: $links-color;
    font-size: 14px;
    line-height: 18px;
    text-decoration: none;
}
</style>
