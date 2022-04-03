<template>
  <el-card class="card" shadow="never" style="border-radius: 8px">
    <div>
      <span>架构信息</span>
      <div style="float: right">更新时间:{{ updateTime }}</div>
    </div>

    <div class="bottom-btn">
      <a target="_blank" href="#">
        <el-button type="success"> vue3.x </el-button>
      </a>
      <a target="_blank" href="#">
        <el-button type="primary"> element-plus </el-button>
      </a>
      <a target="_blank" href="#">
        <el-button type="info"> Vite2.x </el-button>
      </a>
      <a target="_blank" href="#">
        <el-button type="danger">vuex</el-button>
      </a>
      <a target="_blank" href="#">
        <el-button type="warning">vue-router</el-button>
      </a>
      <a target="_blank" href="#">
        <el-button type="primary">sass</el-button>
      </a>
    </div>
    <table class="table">
      <tr>
        <td>nodejs版本</td>
        <td>v14.15.4</td>
        <td>vue版本</td>
        <td>{{ dependencies['vue'] }}</td>
      </tr>
      <tr>
        <td>npm版本</td>
        <td>6.14.10</td>
        <td>vuex版本</td>
        <td>{{ dependencies['vuex'] }}</td>
      </tr>
      <tr>
        <td>md5版本</td>
        <td>^2.3.0</td>
        <td>vue-router版本</td>
        <td>{{ dependencies['vue-router'] }}</td>
      </tr>
      <tr>
        <td>jest版本</td>
        <td>^27.4.3</td>
        <td>axios版本</td>
        <td>^0.21.1</td>
      </tr>
      <tr>
        <td>icon版本</td>
        <td>0.1</td>
        <td>vite-plugin-mock</td>
        <td>2.9.6</td>
      </tr>
      <tr>
        <td>eslint版本</td>
        <td>{{ devDependencies['eslint'] }}</td>
        <td>sass版本</td>
        <td>{{ devDependencies['sass'] }}</td>
      </tr>
      <tr>
        <td>prettierrc.js</td>
        <td>--</td>
        <td>echarts版本</td>
        <td>5.0</td>
      </tr>
    </table>
  </el-card>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { dependencies, devDependencies } from '../../package.json';
export default defineComponent({
  setup() {
    const state = reactive({
      updateTime: '2021-11-26',
    });


let str = "21:212:121:";

 let a =  str.replace(/\:/g,"：");
console.log(a);



    return {
      dependencies,
      devDependencies,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  color: #666;
  border-collapse: collapse;
  background-color: #fff;

  td {
    position: relative;
    min-height: 20px;
    padding: 9px 15px;
    font-size: 14px;
    line-height: 20px;
    border: 1px solid #e6e6e6;

    &:nth-child(odd) {
      width: 20%;
      text-align: right;
      background-color: #f7f7f7;
    }
  }
}

.bottom-btn {
  button {
    margin: 16px 10px 15px 0;
  }
}
</style>
