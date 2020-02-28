<template>
    <div id="slider">
        <div class="slides" v-bind:style="{transform: 'translateX(-' + (currentSlide * 100) + 'vw)'}">
            <a class="slide" v-for="(slide, index) in slides" v-bind:link="slide.link" v-bind:style="{backgroundImage: 'url('+slide.image+')'}">
                <div class="slide-description-wrapper">
                    <div class="slide-description">
                        <small>{{slide.tag}}</small>
                        <h2>{{slide.title}}</h2>
                        <p>{{slide.description}}</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="controls">
            <button type="button" @click="nextSlide" class="slider-button next-slide"></button>
            <button type="button" @click="prevSlide" class="slider-button prev-slide"></button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slides: [
                {
                    link: "/",
                    tag: "Анимация",
                    image: "images/slide_1.jpg",
                    title: "Подготовка спрайтов для анимации в Unity",
                    description: "Спрайты должны немного отличаться друг от друга, чтобы было заметно движение."
                },
                {
                    link: "/",
                    tag: "Анимация",
                    image: "images/slide_2.jpg",
                    title: "Подготовка спрайтов для анимации",
                    description: "Спрайты должны немного отличаться друг от друга, чтобы было заметно движение."
                },
                {
                    link: "/",
                    tag: "Анимация",
                    image: "images/slide_3.jpg",
                    title: "Подготовка спрайтов",
                    description: "Спрайты должны немного отличаться друг от друга, чтобы было заметно движение."
                }
            ],
            currentSlide: 0
        };
    },
    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slidesCount;
        },
        prevSlide() {
            if (this.currentSlide == 0) {
                this.currentSlide = this.slidesCount;
            }

            this.currentSlide = this.currentSlide - 1;
        }
    },
    computed: {
        slidesCount() {
            return this.slides.length;
        }
    },
    created() {
        setInterval(() => {
            // this.nextSlide();
        }, 3000);
    }
};
</script>

<style lang="scss" scoped>
@import "scss/global";

#slider {
    overflow: hidden;
    position: relative;
    height: 600px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
}

.slides {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: stretch;

    transition: transform 0.2s ease;
}

.slide {
    width: 100%;
    flex: 0 0 100vw;
    max-width: 100vw;
    position: relative;
    display: block;
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;

    h2 {
        display: block;
        font-size: 46px;
        font-weight: 600;
        line-height: 54px;
        text-transform: uppercase;
        color: white;
        max-width: 800px;
        margin-top: 30px;
        margin-bottom: 20px;
    }

    p {
        display: block;
        font-size: 24px;
        line-height: 30px;
        color: #FFFFFF;
        max-width: 800px;
    }

    small {
        font-size: 14px;
        font-weight: 300;
        line-height: 18px;
        padding: 6px 14px;
        color: white;
        text-transform: uppercase;
        background-color: #14A5DA;
    }
}

.slide-description-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.56);
    padding-bottom: 122px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
}

.slide-description {
    @include make-container();
}

.slider-button {
    display: block;
    width: 31px;
    height: 22px;
    content: "";
    position: absolute;
    background-image: url(~images/left-arrow.svg);
    bottom: 50px;
    background-color: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
}

.prev-slide {
    left: calc(50% - 570px);
    transform: rotateZ(180deg);
}

.next-slide {
    left: calc(50% + 570px - 31px);
}
</style>
