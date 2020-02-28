<template>
    <div id="slider">
        <div class="slides" v-bind:style="{transform: 'translateX(-' + (currentSlide * 100) + 'vw)'}">
            <div class="slide" v-for="(slide, index) in slides">
                <img v-bind:src="slide.image" alt=""/>
                <h2>{{slide.title}}</h2>
                <p>{{slide.description}}</p>
            </div>
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
                    image: "images/slide_1.jpg",
                    title: "Подготовка спрайтов для анимации в Unity",
                    description: "Спрайты должны немного отличаться друг от друга, чтобы было заметно движение."
                },
                {
                    image: "images/slide_2.jpg",
                    title: "Подготовка спрайтов для анимации в Unity",
                    description: "Спрайты должны немного отличаться друг от друга, чтобы было заметно движение."
                },
                {
                    image: "images/slide_3.jpg",
                    title: "Подготовка спрайтов для анимации в Unity",
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
            this.nextSlide();
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

    img {
        display: block;
        width: 100%;
        height: auto;
    }

    h2 {
        display: block;
        font-size: 46px;
        font-weight: 600;
        line-height: 54px;
        text-transform: uppercase;
        position: absolute;
        top: calc(50% - 200px);
        left: calc(50% - 570px);
        max-width: 800px;
        color: white;
    }

    p {
        display: block;
        font-size: 24px;
        line-height: 30px;
        color: #FFFFFF;
        max-width: 800px;
        position: absolute;
        top: calc(50%);
        left: calc(50% - 570px);
    }
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
