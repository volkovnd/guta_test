<template>
    <header>
        <div id="logo">
            <a href="/">LOGOTYPE</a>
        </div>
        <nav id="menu">
            <a href="/">Меню</a>
            <a href="/">Меню</a>
            <a href="/">Меню</a>
            <a href="/">Меню</a>
            <a href="/">Меню</a>
            <a href="/">Меню</a>
        </nav>
        <div id="sub-menu">
            <a href="/">Регистрация</a>
            <a href="/">Вход</a>
        </div>
    </header>
</template>

<script>
export default {
    components: {

    }
}
</script>

<style lang="scss" scoped>
    @import "scss/global";

    header {
        @include make-container();

        padding-top: 46px;
        padding-bottom: 30px;

        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    #logo {
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

    #menu {
        flex: 0 0 auto;
        width: auto;
        max-width: 100%;

        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        a {
            text-decoration: none;
            color: $links-color;
            padding-left: 30px;
            padding-right: 30px;
        }
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
