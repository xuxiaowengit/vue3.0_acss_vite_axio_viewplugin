<template>
  <div class="tab">
      <router-link 
      class="tab-item"
      v-for ="tab in tabs"
      :key = "tab.path"
      :to="tab.path"
      >
      <span class="tab-link">{{tab.name}}</span>
      </router-link>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
let tabs = reactive([
    { 
        name : 'tab1',
        path: '/watch'
    },
    { 
        name : 'tab2',
        path: '/favicon'
    },
    { 
        name : 'tab3',
        path: '/parent'
    }])
</script>
<style>
.tab{
    display:flex;
    height:44px;
    line-height:44px;
    font-size:14px;
}
.tab .tab-item{
    flex:1;
    text-align:center;
}
.tab .tab-link{
    padding-bottom:5px;
    color:#000;
}
.tab .router-link-active .tab-link{
    color:red;
    border-bottom: 1px solid red;
}
</style>