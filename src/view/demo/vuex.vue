<template>
  <div class="main">
      <p><el-input v-model="count"></el-input></p>
      <el-main>{{numbers}}</el-main>
      <el-button @click="add(2)">add</el-button>
      <el-button @click="changeCount">changeCounts</el-button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex'
export default {
  computed : {
      /*
      count(){
          return this.$store.state.count
      },
      numbers(){
          return this.$store.getters.numbers
      }
      */
     ...mapState(['count']),
     ...mapGetters(['numbers'])
  },
  methods : {
      /*
      add(n){
          this.$store.commit('add',n)
      },
      changeCount(){
          this.$store.dispatch('changeCount')
      }
      */
     ...mapMutations(['add']),
     ...mapActions(['changeCount'])
  }
}
</script>
