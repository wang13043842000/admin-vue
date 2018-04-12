<template>
 <el-container class = "container">
  <el-header class = "header">
    <el-row>
        <el-col :span="4"><div class="grid-content bg-purple"><img src="./home-log.png" alt=""></div></el-col>
        <el-col :offset="16" :span="4"><div class="grid-content bg-purple"><a href="#">退出</a></div></el-col>
      </el-row>
  </el-header>
  <el-container class = "container">
    <el-aside class = "aside" width="200px">Aside</el-aside>
    <el-main class ="Main">Main</el-main>
  </el-container>
</el-container>
</template>
<script>
export default {
  beforeCreate () {

  }
}
</script>
<style>
  .container{
    height: 100%;
    line-height:60px;
  }
  .header{
    background-color: #B3C0D1;
  }
  .aside{
    background-color: blue;
  }
  .Main{
    background-color: red;
  }
  
</style>


