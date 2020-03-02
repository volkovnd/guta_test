<template>
    <div class="footer-top">
        <div class="footer-container">
            <AppLogo />
            <div class="footer-top-row">
                <div class="footer-top-left">
                    <div class="footer-about">
                        г. Москва, метро Бауманская, ул. Бауманская, дом 44
                    </div>
                    <div class="footer-phone">
                        +7 000 000 00 00
                    </div>
                </div>
                <div class="footer-top-right">
                    <div class="footer-top-nav">
                        <a v-for="item in navItems" v-bind:href="item.link">{{item.title}}</a>
                    </div>
                    <div class="footer-top-row">
                        <div class="footer-soc-links">
                            <div class="footer-title">Мы в соц. сетях</div>
                            <div class="footer-soc-links-nav">
                                <a v-for="item in socLinks" v-bind:href="item.link" v-bind:class="item.class"></a>
                            </div>
                        </div>
                        <AppFooterTopForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppLogo from "./AppLogo";
import AppFooterTopForm from "./AppFooterTopForm";

export default {
    components: {
        AppLogo,
        AppFooterTopForm
    },
    data() {
        return {
            navItems: [
                {
                    title: "О компании",
                    link: "/"
                },
                {
                    title: "Партнёрская программа",
                    link: "/"
                },
                {
                    title: "Реклама",
                    link: "/"
                },
                {
                    title: "Пресс-центр",
                    link: "/"
                },
                {
                    title: "Вакансии",
                    link: "/"
                },
                {
                    title: "Помощь",
                    link: "/"
                },
                {
                    title: "Правила",
                    link: "/"
                }
            ],
            socLinks: [
                {
                    link: "/",
                    class: "facebook"
                },
                {
                    link: "/",
                    class: "odnoklassniki"
                },
                {
                    link: "/",
                    class: "instagram"
                }
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
@import "scss/global";

.footer-top {
    padding: 30px 0;

    background-color: #DCE5E9;
}

.footer-container {
    @include make-container();

    text-align: center;

    @media(min-width: 767px) {
        text-align: left;
    }
}

.footer-top-row {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
}

.footer-top-left {
    width: 100%;

    flex: 0 0 100%;
    max-width: 100%;

    @media(min-width: 767px) {
        flex: 0 0 215px;
        max-width: 215px;
    }
}

.footer-top-right {
    width: 100%;

    flex: 0 0 100%;
    max-width: 100%;

    @media(min-width: 767px) {
        flex: 0 0 800px;
        max-width: 800px;
    }
}

.footer-about {
    font-size: 14px;
    line-height: 18px;

    margin-bottom: 20px;

    @media(min-width: 767px) {
        margin-bottom: 60px;
    }
}

.footer-phone {
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;

    margin-bottom: 26px;

    @media(min-width: 767px) {
        margin-bottom: 0;
    }
}

.footer-top-nav {
    margin-bottom: 50px;

    @media(min-width: 767px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
    }

    a {
        font-size: 14px;
        line-height: 18px;
        text-decoration: none;
        color: $links-color;
        display: block;

        margin-bottom: 8px;

        @media(min-width: 767px) {
            margin-bottom: 0;
        }
    }
}

.footer-title {
    display: block;
    font-size: 14px;
    line-height: 18px;

    margin-bottom: 20px;

    @media(min-width: 767px) {
        margin-bottom: 10px;
    }
}

.footer-soc-links {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;

    @media(min-width: 767px) {
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 0;
    }
}

.footer-soc-links-nav {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media(min-width: 767px) {
        justify-content: flex-start;
    }

    & > a {
        display: block;
        background-size: 100%;

        & + a {
            margin-left: 12px;
        }
    }

    .facebook {
        background-image: url("~images/facebook-letter-logo.svg");

        width: 11px;
        height: 24px;

        @media(min-width: 767px) {
            width: 7px;
            height: 14px;
        }
    }

    .odnoklassniki {
        background-image: url("~images/odnoklassniki.svg");

        width: 18px;
        height: 26px;

        @media(min-width: 767px) {
            width: 11px;
            height: 16px;
        }
    }

    .instagram {
        background-image: url("~images/instagram-logo.svg");

        width: 25px;
        height: 25px;

        @media(min-width: 767px) {
            width: 15px;
            height: 15px;
        }
    }
}
</style>
