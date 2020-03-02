<template>
    <section id="about">
        <div class="title">
            <a href="/">О компании</a>
        </div>
        <div class="content">
            <p>Что-то более продвинутое делается с помощью покадровой анимации — когда для разных состояний объекта (стоит, идет, в прыжке, атакует) создается несколько спрайтов (двумерное изображение), которые сменяют друг друга с определенным интервалом.</p>
            <a class="read-more" href="/">Подробнее</a>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "scss/global";

#about {
    @include make-container();

    padding-top: 20px;
    padding-bottom: 30px;

    @media (min-width: 767px) {
        padding-top: 70px;
        padding-bottom: 70px;

        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }
}

.content {
    @media (min-width: 767px) {
        width: 100%;
        flex: 0 0 770px;
        max-width: 770px;
    }
}

.title {
    text-align: center;

    @media (min-width: 767px) {
        text-align: left;
    }

    a {
        font-weight: 700;
        color: #000000;
        text-transform: uppercase;
        text-decoration: none;

        font-size: 16px;
        line-height: 19px;

        @media (min-width: 767px) {
            font-size: 32px;
            line-height: 39px;
        }
    }
}

p {
    color: #000000;

    font-size: 10px;
    line-height: 13px;
    margin-bottom: 20px;

    @media (min-width: 767px) {
        font-size: 16px;
        line-height: 26px;
        margin-bottom: 50px;
    }
}

.read-more {
    font-weight: 600;
    color: $links-color;
    text-decoration: none;
    text-transform: uppercase;
    display: block;

    font-size: 10px;
    line-height: 13px;

    text-align: center;

    @media (min-width: 767px) {
        font-size: 14px;
        line-height: 18px;

        text-align: left;
    }

    &:after {
        content: "";
        width: 18px;
        height: 13px;
        background-image: url("~images/read-more.svg");
        display: inline-block;
        margin-left: 16px;
        margin-bottom: -2px;

        @media (min-width: 767px) {
            margin-bottom: 0;
        }
    }
}
</style>
