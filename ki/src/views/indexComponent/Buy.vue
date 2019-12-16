<template>
  <div class="buy">
    <div class="buy-nav clearfix">
      <div class="fl location"> <van-icon name="location-o" size="20px" class="location-icon" /><span>广州</span></div>
      <div class="fl toggle">
        <div class="toggle-content">
          <div class="fl active">电影</div>
          <div class="fl">影院</div>
        </div>
      </div>
      <div class="fl search">
        <span class="fr search-icon">
          <van-icon name="search" />
        </span>
      </div>
    </div>

    <div>
        <router-view></router-view>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'buy'
  }
</script>

<style lang="less" scoped>
  .buy{
    padding: 0 10px;
    background-color: #000000;
    .location{
      width: 60px;
      height: 40px;
      line-height: 40px;
      color: #ffffff;
      font-size: 14px;
       .location-icon {
      line-height: 1.0666666666666667rem;
    }
    span {
      position: relative;
      position: relative;
      top: -5px;
      left: 5px;
    }
    }

    .toggle{
      width: calc(~"100% - 120px");
      height: 40px;
      .toggle-content{
        width: 120px;
        margin: 0 auto;
        background-color: #F9F9FB;
        text-align: center;
        border-radius: 12px;
        overflow: hidden;
        line-height: 24px;
        margin-top: 8px;
        font-size: 14px;
        >div{
          width: 60px;
          height: 24px;
          color: #8798AF;
          &.active{
            background-color: #fff;
            color: #1D2736;
          }
        }
        
      }
    }
    .search{
      width: 60px;
      height: 40px;
      .search-icon{
        width: 20px;
        height: 20px;
        margin-top: 10px;
        font-size: 20px;
        color: #ffffff;
      }
    }
  }
</style>