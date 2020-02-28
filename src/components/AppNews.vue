<template>
    <section id="news">
        <div class="list">
            <div class="news-item" v-for="(article, index) in showingNews">
                <img v-bind:src="article.image" alt="">
            </div>
        </div>
        <div class="load-more-wrapper">
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
                    image: "images/img_1.jpg"
                },
                {
                    image: "images/img_2.jpg"
                },
                {
                    image: "images/img_3.jpg"
                },
                {
                    image: "images/img_3.jpg"
                },
                {
                    image: "images/img_2.jpg"
                },
                {
                    image: "images/img_1.jpg"
                },
                {
                    image: "images/img_2.jpg"
                },
                {
                    image: "images/img_3.jpg"
                },
                {
                    image: "images/img_1.jpg"
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
