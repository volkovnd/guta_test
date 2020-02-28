<template>
    <nav id="menu">
        <div class="nav-item" v-for="item in navItems" >
            <a v-bind:href="item.link">{{ item.title }}</a>
            <!-- <div class="nav-dropdown" v-if="typeof item.childrens !== 'undefined' && item.childrens.length > 0">
                <div class="container">
                    <div class="nav-dropdown-menu">
                        <a v-for="dropdownItem in item.childrens" v-bind:href="dropdownItem.link">{{dropdownItem.title}}</a>
                    </div>
                </div>
            </div> -->
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            navItems: [
                {
                    title: "Меню",
                    link: "/",
                    childrens: [
                        {
                            title: "Меню",
                            link: "/"
                        },
                        {
                            title: "Меню",
                            link: "/"
                        },
                        {
                            title: "Меню",
                            link: "/"
                        },
                        {
                            title: "Меню",
                            link: "/"
                        }
                    ]
                },
                {
                    title: "Меню",
                    link: "/"
                },
                {
                    title: "Меню",
                    link: "/"
                },
                {
                    title: "Меню",
                    link: "/"
                },
                {
                    title: "Меню",
                    link: "/"
                },
                {
                    title: "Меню",
                    link: "/"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
@import "scss/global";

#menu {
    flex: 0 0 650px;
    width: 100%;
    max-width: 650px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    a {
        text-decoration: none;
        color: $links-color;
        position: relative;

        &:after {
            position: absolute;
            top: 100%;
            left: 0;
            right: 100%;
            content: "";
            background-color: #000000;
            height: 1px;
            transition: all 0.2s ease;
        }

        &:hover {
            font-weight: 600;

            &:after {
                right: 0;
            }
        }
    }

    .nav-dropdown {
        display: none;

        position: absolute;
        top: 100%;
        left: 0;
        right: 0;

        width: 100%;

        background-color: white;
    }

    .container {
        @include make-container();
    }

    .nav-item:hover {
        & > .nav-dropdown {
            display: block;
        }
    }
}
</style>
