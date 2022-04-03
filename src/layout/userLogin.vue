<template>
  <div class="sidebar-logo-container collapse">
    <router-link class="sidebar-logo-link" to="/">
      <img class="sidebar-logo" :src="Logo" />
      <transition name="fade">
        <h1 class="sidebar-title" v-if="$store.getters.sidebarOpened">
          VUE3.0_vite综合系统
        </h1>
      </transition>
    </router-link>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Logo from "../assets/logo.png";
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    return {
      Logo,
    };
  },
});
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  
  position: relative;
  width: 100%;
  height: 30px;
  line-height: 30px;
  background: $menuBg;
  text-align: center;
  overflow: hidden;
  margin-bottom: 30px;
  margin-top: 20px;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & .sidebar-logo {
      display: inline-block;
      height: 100%;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #435ebe;
      font-weight: 600;
      line-height: 50px;
      font-size: 20px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
      margin-left: 8px;
    }
  }

  &.notitle {
    .sidebar-title {
      display: none;
    }
    & .sidebar-logo {
      height: 60%;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s linear;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
