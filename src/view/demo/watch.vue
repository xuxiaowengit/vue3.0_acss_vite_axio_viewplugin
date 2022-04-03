<template>
<h3>watch监听器</h3>  
<div>name: <input type="text" v-model="name"></div>
<div>name:{{name}}</div>
<div>age: <input type="text" v-model="age"></div>
<div>age:{{age}}</div>
</template>
<script>
import { watch, reactive, toRefs } from 'vue' 
export default {
   setup(){
    const obj = reactive({
      name: 'sichaoyun', age : 18
    })
    watch(() => obj.name, (c,p) => {
        console.log(c,p)
     })
    watch(() => obj.age, (c,p) => {
        console.log(c,p)
    })  
     const { name, age } = toRefs(obj)
     return {
         name,
         age
     }
   }
}
</script>
