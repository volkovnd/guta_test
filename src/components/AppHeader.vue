<template>
    <header>
        <div v-if="isMobile()" class="mobile-container">
            <AppLogo />
            <button type="button" class="hamburger" @click="showMobileNav=true"></button>
        </div>
        <div class="container" v-bind:class="showMobileNav===true?'shown':''">
            <div class="top">
                <AppLogo />
                <button v-if="isMobile()" type="button" class="close" @click="showMobileNav=false"></button>
            </div>
            <AppHeaderNav />
            <div id="sub-menu">
                <a href="/">Регистрация</a>
                <a href="/">Вход</a>
            </div>
            <div v-if="isMobile()" id="bottom-menu">
                <a href="/">Режим работы</a>
                <a href="/">Правила посещения</a>
            </div>
        </div>
    </header>
</template>

<script>
import AppLogo from "./AppLogo";
import AppHeaderNav from "./AppHeaderNav";
import { isMobile } from "./utils";

export default {
    components: {
        AppLogo,
        AppHeaderNav
    },
    data() {
        return {
            showMobileNav: false
        };
    },
    methods: {
        isMobile
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

    .top {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 38px;

        .close {
            display: block;
            border: none;
            padding: 0;
            content: "";
            background-image: url(~images/close.svg);
            background-color: transparent;
            width: 22px;
            height: 23px;
        }
    }

    .hamburger {
        display: block;
        background-image: url(~images/burger.svg);
        background-position: center;
        background-repeat: no-repeat;
        width: 27px;
        height: 18px;
        border: none;
        padding: 0;
        background-color: transparent;
    }

    .mobile-container {
        height: 68px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 15px;
        padding-right: 15px;
    }

    .container {
        @include make-container();

        padding-top: 20px;
        padding-bottom: 20px;
        z-index: 10;

        @media(max-width: 767px) {
            position: fixed;

            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: white;

            width: 100%;
            height: 100%;

            transform: translateX(-100vw);
            transition: all 0.2s ease;

            &.shown {
                transform: translateX(0);
            }
        }

        @media(min-width: 767px) {

            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            height: 100px;
        }
    }

    #sub-menu {
        max-width: 100%;
        margin-top: 80px;
        margin-bottom: 40px;

        @media(min-width: 767px) {
            flex-basis: 0;
            flex-grow: 1;

            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;

            margin-top: 0;
            margin-bottom: 0;
        }

        a {
            display: block;
            font-size: 14px;
            line-height: 18px;
            font-weight: 600;
            color: $links-color;
            text-decoration: none;
            margin-bottom: 10px;
            text-align: center;

            @media(min-width: 767px) {
                text-align: left;
                margin-bottom: 0;
                font-size: 12px;
            }

            & + a {
                @media(min-width: 767px) {
                    margin-left: 25px;
                }
            }
        }
    }

    #bottom-menu {
        a {
            font-size: 14px;
            line-height: 18px;
            color: $links-color;
            text-decoration: none;
            display: block;
            text-align: center;
            margin-bottom: 10px;
        }
    }
</style>
