<template>
    <div id="app">
        <AppTop />
        <AppHeader />
    </div>
</template>

<script>
import AppTop from "./AppTop";
import AppHeader from "./AppHeader";

export default {
    components: {
        AppTop,
        AppHeader,
        AppSlider
    }
};
</script>

<style>
    @import "~normalize.css/normalize.css";

    body {
        font-family: Montserrat, sans-serif;
        font-weight: 400;
    }

    * {
        box-sizing: border-box;
    }

    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap');
</style>
