<template>
  <div
    id="menu"
    @mouseover="showDropdown = true && !isMobile()"
    @mouseleave="showDropdown = false"
  >
    <nav>
      <div class="nav-item" v-for="(item, index) in navItems" :key="index">
        <a :href="baseUrl + item.link">{{ item.title }}</a>
      </div>
    </nav>
    <div id="dropdown" v-show="showDropdown === true">
      <div class="dropdown-container">
        <div
          class="dropdown-item"
          v-for="(item, index) in navItems"
          :key="index"
        >
          <a
            v-for="(dropdownItem, dropdownIndex) in item.childrens"
            :key="dropdownIndex"
            :href="baseUrl + dropdownItem.link"
            >{{ dropdownItem.title }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isMobile } from "./utils";

export default {
  data() {
    return {
      navItems: [
        {
          title: "Меню",
          link: "",
          childrens: [
            {
              title: "Меню",
              link: ""
            },
            {
              title: "Меню",
              link: ""
            },
            {
              title: "Меню",
              link: ""
            },
            {
              title: "Меню",
              link: ""
            }
          ]
        },
        {
          title: "Меню",
          link: ""
        },
        {
          title: "Меню",
          link: ""
        },
        {
          title: "Меню",
          link: ""
        },
        {
          title: "Меню",
          link: "",
          childrens: [
            {
              title: "Меню",
              link: ""
            },
            {
              title: "Меню",
              link: ""
            },
            {
              title: "Меню",
              link: ""
            },
            {
              title: "Меню",
              link: ""
            }
          ]
        },
        {
          title: "Меню",
          link: ""
        }
      ],
      showDropdown: false
    };
  },
  methods: {
    isMobile
  },
  computed: {
    baseUrl() {
      return typeof window.publicPath !== "undefined" ? window.publicPath : "/";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~scss/global";;

.container {
  @include make-container();
}

#menu {
  width: 100%;

  @media (min-width: 767px) {
    max-width: 650px;
    flex: 0 0 650px;
  }
}

nav {
  @media (min-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .nav-item {
    margin-bottom: 25px;
    text-align: center;

    @media (min-width: 767px) {
      text-align: left;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
      flex-basis: 0;
      flex-grow: 1;
      margin-bottom: 0;
      height: 100px;
    }
  }

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

  .nav-item:hover {
    & > .nav-dropdown {
      display: block;
    }
  }
}

#dropdown {
  position: fixed;
  top: 140px;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0px 3px 6px #00000029;

  &:after {
    position: absolute;
    left: calc(50% - (1170px / 2));
    top: 0;
    width: 1170px;
    height: 1px;
    background-color: #cecece;
    content: "";
  }
}

.dropdown-container {
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
}

.dropdown-item {
  flex-basis: 0;
  flex-grow: 1;
  display: block;

  a {
    display: block;
    font-size: 14px;
    line-height: 18px;
    color: $links-color;
    text-decoration: none;
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
