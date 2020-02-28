<template>
    <div class="logo">
        <a href="/">LOGOTYPE</a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "scss/global";

.logo {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;

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
