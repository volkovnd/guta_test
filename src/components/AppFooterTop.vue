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

    flex: 0 0 215px;
    max-width: 215px;
}

.footer-top-right {
    width: 100%;

    flex: 0 0 800px;
    max-width: 800px;
}

.footer-about {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 60px;
}

.footer-phone {
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
}

.footer-top-nav {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 50px;

    a {
        font-size: 14px;
        line-height: 18px;
        text-decoration: none;
        color: $links-color;
    }
}

.footer-title {
    display: block;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 10px;
}

.footer-soc-links-nav {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    & > a {
        display: block;
        background-size: 100%;

        & + a {
            margin-left: 12px;
        }
    }

    .facebook {
        width: 7px;
        height: 14px;
        background-image: url("~images/facebook-letter-logo.svg");
    }

    .odnoklassniki {
        width: 11px;
        height: 16px;
        background-image: url("~images/odnoklassniki.svg");
    }

    .instagram {
        width: 15px;
        height: 15px;
        background-image: url("~images/instagram-logo.svg");
    }
}
</style>
