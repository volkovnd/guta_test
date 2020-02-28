<template>
    <header>
        <div class="container">
            <AppLogo />
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
        </div>
    </header>
</template>

<script>
import AppLogo from "./AppLogo";

export default {
    components: {
        AppLogo
    }
}
</script>

<style lang="scss" scoped>
    @import "scss/global";

    header {
        position: fixed;
        top: 40px;
        left: 0;
        right: 0;
        z-index: 10;

        background-color: white;

        padding-top: 46px;
        padding-bottom: 30px;
        box-shadow: 0px 3px 6px #00000029;
    }

    .container {
        @include make-container();

        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    #menu {
        flex: 0 0 650px;
        width: 100%;
        max-width: 650px;

        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        a {
            text-decoration: none;
            color: $links-color;
            position: relative;

            &:after {
                position: absolute;
                top: 100%;
                left: 0;
                right: 100%;
                content: "";
                background-color: #000000;
                height: 1px;
                transition: all 0.2s ease;
            }

            &:hover {
                font-weight: 600;

                &:after {
                    right: 0;
                }
            }
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
