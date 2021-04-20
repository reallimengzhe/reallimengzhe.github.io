<template>
  <div class="app">
    <h2 class="app-title">这里是 李孟哲 的 GitHub 博客</h2>
    <h4 class="app-subtitle">点击下方链接访问我的文章列表或开源作品</h4>
    <div class="app-container">
      <a
        v-for="item in blogList"
        class="app-icon"
        target="_blank"
        :href="item.link"
      >
        <img :src="item.logo" :alt="item.name" />
        <h4>{{ item.name }}</h4>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class App extends Vue {
  blogList = [
    {
      name: "简书",
      logo: require("@/assets/jianshu.webp"),
      link: "https://www.jianshu.com/u/6c204631fb1c",
    },
    {
      name: "掘金",
      logo: require("@/assets/juejin.webp"),
      link: "https://juejin.cn/user/3984285869810887",
    },
  ];
}
</script>
<style lang="scss">
$--primary-color: #1d1d1f;
.app {
  // 上下左右居中
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  // 尺寸
  width: fit-content;
  min-width: 300px;
  height: fit-content;
  text-align: center;
  &-title {
    color: $--primary-color;
    margin-bottom: 10px;
  }
  &-subtitle {
    color: #636366;
    margin-bottom: 30px;
  }
  &-container {
    display: flex;
    // justify-content: space-between;
    // align-items: center;
  }
  &-icon {
    + .app-icon {
      margin-left: 20px;
    }
    box-sizing: border-box;
    width: 150px;
    background-color: #f8f8f8;
    border-radius: 16px;
    padding: 20px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
    img {
      width: 100%;
      margin-bottom: 10px;
    }
    h4 {
      color: $--primary-color;
      text-align: center;
    }
  }
}
</style>
