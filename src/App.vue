<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
  .login-container{
    font-family: "montserrat";
    background-image: linear-gradient(55deg,#330867,#30cfd0,#b7e5ed,#abe3f6,#a6c1ee,#eec4f7,#f5e9f7,#f8fbe9);  
    background-size:500%;
    animation: bganimation 20s infinite;
  }
  @keyframes bganimation {
    0%{
      background-position: 0% 40%;
    }
    35%{
      background-position: 60% 30%;
    }
    65%{
      background-position: 90% 55%;
    }
    100%{
      background-position: 0% 50%;
    }
  }
</style>
