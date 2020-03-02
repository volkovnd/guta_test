<template>
    <header>
        <div class="container">
            <AppLogo />
            <AppHeaderNav />
            <div id="sub-menu">
                <a href="/">Регистрация</a>
                <a href="/">Вход</a>
            </div>
        </div>
    </header>
</template>

<script>
import AppLogo from "./AppLogo";
import AppHeaderNav from "./AppHeaderNav";

export default {
    components: {
        AppLogo,
        AppHeaderNav
    }
};
</script>

<style lang="scss" scoped>
    @import "scss/global";

    header {
        position: fixed;
        left: 0;
        right: 0;
        z-index: 10;
        background-color: white;
        top: 0;

        @media(min-width: 767px) {
            top: 40px;
            box-shadow: 0px 3px 6px #00000029;
        }
    }

    .container {
        @include make-container();

        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        height: 100px;
    }

    #sub-menu {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;

        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        a {
            font-size: 12px;
            font-weight: 600;
            color: $links-color;
            text-decoration: none;

            & + a {
                margin-left: 25px;
            }
        }
    }
</style>
