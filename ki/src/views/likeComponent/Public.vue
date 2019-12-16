<template>
  <div class="public">
   
 <van-tabs
      v-model="activeName"
      title-inactive-color="#ffffff"
      :border="false"
       background="#000000"
      color="rgb(245, 174, 82)"
      title-active-color="rgb(245, 174, 82)"
    >
      <van-tab title="正在热映" name="a">
       
      
      </van-tab>
       <van-tab title="即将上映" name="b">
       
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
      name: "public",

  data() {
    return {
      activeName: "a"
    };
  },
  }
</script>

<style lang="less" scoped>

</style>