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
export default {

}
</script>

<style lang="scss" scoped>
@import "scss/global";

#about {
    @include make-container();

    padding-top: 70px;
    padding-bottom: 70px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
}

.content {
    width: 100%;
    flex: 0 0 770px;
    max-width: 770px;
}

.title a {
    font-size: 32px;
    line-height: 39px;
    font-weight: 700;
    color: #000000;
    text-transform: uppercase;
    text-decoration: none;
}

p {
    font-size: 16px;
    line-height: 26px;
    color: #000000;
    margin-bottom: 50px;
}

.read-more {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: $links-color;
    text-decoration: none;
    text-transform: uppercase;

    &:after {
        content: "";
        width: 18px;
        height: 13px;
        background-image: url("~images/read-more.svg");
        display: inline-block;
        margin-left: 16px;
    }
}
</style>
