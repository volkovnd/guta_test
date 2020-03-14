<template>
  <div v-if="slides.length > 0" id="slider">
    <div
      class="slides"
      :style="{ transform: 'translateX(-' + currentSlide * 100 + 'vw)' }"
    >
      <a
        class="slide"
        v-for="(slide, index) in slides"
        :key="index"
        :link="baseUrl + slide.link"
        :style="{ backgroundImage: 'url(' + slide.image + ')' }"
      >
        <div class="slide-description-wrapper">
          <div class="slide-description">
            <small>{{ slide.tag }}</small>
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </a>
    </div>
    <div class="controls">
      <button
        type="button"
        @click="nextSlide"
        class="slider-button next-slide"
      ></button>
      <button
        type="button"
        @click="prevSlide"
        class="slider-button prev-slide"
      ></button>
    </div>
    <div class="crumbs">
      <button
        type="button"
        v-for="(slide, index) in slides"
        :key="index"
        @click="selectSlide(index)"
        :class="currentSlide === index ? 'active' : ''"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [],
      currentSlide: 0
    };
  },
  computed: {
    baseUrl() {
      return typeof window.publicPath !== "undefined" ? window.publicPath : "/";
    },
    slidesCount() {
      return this.slides.length;
    }
  },
  created() {
    this.getAllSlides();
  },
  methods: {
    initSliderTimer() {
      setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
    getAllSlides() {
      import("../api/slides.json").then(data => {
        let slides = data.default;

        if (slides && slides.length > 0) {
          this.slides = slides;

          this.initSliderTimer();
        }
      });
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slidesCount;
    },
    prevSlide() {
      if (this.currentSlide == 0) {
        this.currentSlide = this.slidesCount;
      }

      this.currentSlide = this.currentSlide - 1;
    },
    selectSlide(slidePos) {
      this.currentSlide = slidePos;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~scss/global";

#slider {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  height: 240px;

  @media (min-width: 767px) {
    height: 600px;
  }
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
  background-repeat: no-repeat;
  background-size: cover;
  height: 240px;

  @media (min-width: 767px) {
    height: 600px;
  }

  h2 {
    display: block;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    max-width: 800px;
    margin-top: 16px;
    margin-bottom: 10px;

    @media (min-width: 767px) {
      margin-top: 30px;
      margin-bottom: 20px;

      font-size: 46px;
      line-height: 54px;
    }
  }

  p {
    display: block;
    color: #ffffff;
    max-width: 800px;
    font-size: 14px;
    line-height: 18px;

    @media (min-width: 767px) {
      font-size: 24px;
      line-height: 30px;
    }
  }

  small {
    padding: 6px 14px;
    color: white;
    text-transform: uppercase;
    background-color: #14a5da;
    font-size: 8px;
    font-weight: 500;

    @media (min-width: 767px) {
      font-size: 14px;
      font-weight: 300;
      line-height: 18px;
    }
  }
}

.slide-description-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.56);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  padding-bottom: 40px;
  padding-top: 40px;

  @media (min-width: 767px) {
    padding-top: 0;
    padding-bottom: 122px;
  }
}

.slide-description {
  @include make-container();
}

.slider-button {
  display: block;
  content: "";
  position: absolute;
  background-image: url(~images/left-arrow.svg);
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  background-size: 100%;

  bottom: 11px;

  width: 18px;
  height: 12px;

  @media (min-width: 767px) {
    bottom: 50px;

    width: 31px;
    height: 22px;
  }
}

.prev-slide {
  transform: rotateZ(180deg);

  left: calc(15px);

  @media (min-width: 767px) {
    left: calc(50% - 570px);
  }
}

.next-slide {
  left: calc(100vw - 15px - 18px);

  @media (min-width: 767px) {
    left: calc(50% + 570px - 31px);
  }
}

.crumbs {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  bottom: 15px;

  @media (min-width: 767px) {
    bottom: 60px;
  }

  button {
    display: block;
    height: 3px;
    content: "";
    display: block;
    background-color: white;
    padding: 0;
    border: 0;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
    width: 40px;

    @media (min-width: 767px) {
      width: 80px;
      margin-left: 10px;
      margin-right: 10px;
    }

    &.active {
      background-color: #14a5da;
    }
  }
}
</style>
