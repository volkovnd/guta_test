<template>
    <section id="news">
        <div class="title">
            <a class="h1" href="/">Новости</a>
            <a class="read-all" href="/">Все новости</a>
        </div>
        <div class="list">
            <a class="news-item" v-for="(article, index) in showingNews" v-bind:href="article.link">
                <img v-bind:src="article.image" alt=""/>
                <div class="news-item-upped">
                    <span class="news-item-number">{{index+1}}</span>
                </div>
            </a>
        </div>
        <div class="load-more-wrapper" v-if="allNewsShown === false">
            <button type="button" class="load-more" @click="loadMore">Показать еще</button>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            news: [
                {
                    image: "images/img_1.jpg",
                    link: "/"
                },
                {
                    image: "images/img_2.jpg",
                    link: "/"
                },
                {
                    image: "images/img_3.jpg",
                    link: "/"
                },
                {
                    image: "images/img_3.jpg",
                    link: "/"
                },
                {
                    image: "images/img_2.jpg",
                    link: "/"
                },
                {
                    image: "images/img_1.jpg",
                    link: "/"
                },
                {
                    image: "images/img_2.jpg",
                    link: "/"
                },
                {
                    image: "images/img_3.jpg",
                    link: "/"
                },
                {
                    image: "images/img_1.jpg",
                    link: "/"
                }
            ],
            page: 1
        };
    },
    computed: {
        newsCount() {
            return this.news.length;
        },
        showingNews() {
            let newsCount = this.page * 3;

            if (newsCount > this.newsCount) {
                newsCount = this.newsCount;
            }

            return this.news.slice(0, newsCount);
        },
        allNewsShown() {
            return this.newsCount <= this.page * 3;
        }
    },
    methods: {
        loadMore() {
            this.page = this.page + 1;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~scss/global";

#news {
    @include make-container();
    margin-bottom: 70px;
}

.title {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 30px;

    .h1 {
        font-size: 32px;
        line-height: 39px;
        font-weight: 700;
        color: #000000;
        text-transform: uppercase;
        text-decoration: none;
    }

    .read-all {
        font-size: 16px;
        line-height: 1;
        color: #000000;
        text-decoration: none;
    }
}

.list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
}

.news-item {
    position: relative;
    width: 100%;
    flex: 0 0 calc(50% - 15px);
    max-width: calc(50% - 15px);
    margin-bottom: 30px;
    height: 300px;
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:nth-of-type(3n + 3) {
        flex: 0 0 100%;
        max-width: 100%;
    }
}

img {
    display: block;
    width: 100%;
    height: auto;
}

.news-item-upped {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.46);
}

.news-item-number {
    font: Bold 161px/196px Montserrat;
    color: rgba(247, 247, 247, 0.6);

}

.load-more {
    border: none;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
    font-weight: 600;
    color: #000000;
    font-size: 14px;
    text-transform: uppercase;
}
.load-more-wrapper {
    text-align: center;
}
</style>
