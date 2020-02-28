<template>
    <div id="app">
        <AppTop />
        <AppHeader />
        <AppSlider />
        <AppAbout />
    </div>
</template>

<script>
import AppTop from "./AppTop";
import AppHeader from "./AppHeader";
import AppSlider from "./AppSlider";
import AppAbout from "./AppAbout";

export default {
    components: {
        AppTop,
        AppHeader,
        AppSlider,
        AppAbout
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
