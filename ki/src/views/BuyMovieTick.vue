<template>
  <div class="buy-movie-tick">
    <div class="bg">
      <van-nav-bar
        title="座位选择"
        left-text="返回"
        left-arrow
      />
    </div>
    <div class="seat-box">
      <div class="tick-box">
        <ul class="tick clearfix">
          <li><span class="c c1"></span><i class="r r1"></i>1排3座<span class="c c2"></span><i class="r r2"></i></li>
          <li><span class="c c1"></span><i class="r r1"></i>1排3座<span class="c c2"></span><i class="r r2"></i></li>
          <li><span class="c c1"></span><i class="r r1"></i>1排3座<span class="c c2"></span><i class="r r2"></i></li>
          <li><span class="c c1"></span><i class="r r1"></i>1排3座<span class="c c2"></span><i class="r r2"></i></li>
          <li><span class="c c1"></span><i class="r r1"></i>1排3座<span class="c c2"></span><i class="r r2"></i></li>
        </ul>
      </div>

      <!-- 银屏 -->
      <div class="screen">
        <div class="screen-arc"></div>
        <div class="screen-arc1"></div>
      </div>
      
      <!-- 座位 -->
      <div class="chair-box">
        <div class="chair chair1">
          <span></span>
          <span></span>
          <span class="selected"></span>
        </div>
        <div class="chair chair2">
          <span></span>
          <span></span>
          <span class="s3"></span>
          <span></span>
          <span class="buying"></span>
          <span></span>
          <span></span>
          <span class="s8"></span>
          <span></span>
        </div>
        <div class="chair chair2">
          <span></span>
          <span></span>
          <span class="s3"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="s8"></span>
          <span></span>
        </div>
        <div class="chair chair2">
          <span></span>
          <span></span>
          <span class="s3"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="s8"></span>
          <span></span>
        </div>
        <div class="chair chair2">
          <span></span>
          <span></span>
          <span class="s3"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="s8"></span>
          <span></span>
        </div>
        <div class="chair chair2">
          <span></span>
          <span></span>
          <span class="s3"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="s8"></span>
          <span></span>
        </div>
        <div class="chair chair3">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <!-- 座位标志 -->
      <div class="chair-flag clearfix">

        <div>
          <div class="c-box clearfix">
            <i class="c-bg fl c-bg1"></i><span class="fl buyed">已售</span>
          </div>
        </div>

        <div>
          <div class="c-box clearfix m-box">
            <i class="c-bg fl c-bg2"></i><span class="fl buyed">已选</span>
          </div>
        </div>

        <div>
          <div class="c-box clearfix fr">
            <i class="c-bg fl c-bg3"></i><span class="fl buyed">可选</span>
          </div>
        </div>

      </div>
      
      <!-- 购票 -->
      <div class="buy-tick">
        <span class="fl total">合计：￥120.00</span>
        <span class="fr pay">确认支付</span>
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'buyMovieTick'
  }
</script>

<style lang="less" scoped>
  .buy-movie-tick{
    .bg{
      height: 200px;
      background: url("https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2569098573.jpg") no-repeat center center;
      background-size: cover;
      .van-nav-bar{
        background-color: transparent;
      }
      .van-nav-bar__text,.van-nav-bar__title,.van-nav-bar .van-icon{
        color: #fff;
      }
      [class*=van-hairline]::after{
        border: none;
      }
    }
    .seat-box{
      position: fixed;
      top: 180px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #fff;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      padding-top: 30px;
    }
    .tick-box{
      overflow-x: auto;
      overflow-y: hidden;
      margin: 0 10px;
      .tick{
        width: 600px;
        >li{
          float: left;
          width: 80px;
          height: 32px;
          border: 1px solid #FF9800;
          position: relative;
          text-align: center;
          font-size: 16px;
          line-height: 32px;
          background-color: #FFBB42;
          color: #fff;
          margin-right: 10px;
        }
        .r{
          position: absolute;
          width: 10px;
          height: 10px;
          border: 1px solid #FF9800;
         
          top: 0;
          bottom: 0;
          margin: auto 0;
          border-radius: 50%;
          background-color: #fff;
          z-index: 1;
        }
        .r1{
          left: -7px;
        }
        .c1{
          left: -8px;
        }
        .r2{
          right: -7px;
        }
        .c2{
          right: -8px;
        }
        .c{
          position: absolute;
          top: 0;
          bottom: 0;
          background-color: #fff;
          width: 7px;
          z-index: 2;
        }
      }
    }
    .screen{
      width: 300px;
      height: 60px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      .screen-arc{
        width: 500px;
        height: 200px;
        border-radius: 50%;
        border: 3px solid #FFAE00;
        position: absolute;
        top: 15px;
        left: -100px;
      }

      .screen-arc1{
        width: 500px;
        height: 200px;
        border-radius: 50%;
        border: 3px solid rgba(255, 243, 199, .6);
        position: absolute;
        top: 18px;
        left: -100px;
      }
    }
    .buy-tick{
      position: absolute;
      bottom: 0;
      left: 0;
      height: 54px;
      width: calc(~"100% - 20px");
      background-color: #fff;
      box-shadow: 0px 0px 5px 1px #ccc;
      padding: 0 10px;
      .total{
        line-height: 54px;
        font-size: 16px;
      }
      .pay{
        width: 80px;
        height: 34px;
        background-image: linear-gradient(to bottom, #FED73E, #FFBE46);
        color: #fff;
        font-size: 13px;
        text-align: center;
        line-height: 34px;
        border-radius: 10px;
        border-bottom: 2px solid #FF9A00;
        letter-spacing: 2px;
        margin-top: 10px;
      }
    }
    .chair-box{
      padding: 0 10px;
    }
    .chair{
      margin: 0 auto;
      height: 24px;
      margin-bottom: 8px;
      &.chair1{
        width: 96px;
      }
      &.chair2{
        width: 352px;
        >span{
          &.s3,&.s8{
            margin-left: 36px;
          }
          
        }
      }
      &.chair3{
        width: 160px;
      }
      >span{
        float: left;
        width: 24px;
        height: 24px;
        margin: 0 4px;
        background: url("../assets/images/chair2.png") no-repeat center center;
        background-size: 24px 24px;
        &.selected{
          background-image: url("../assets/images/chair1.png")
        }
        &.buying{
          background-image: url("../assets/images/chair3.png")
        }
      }
    }
    .chair-flag{
      margin: 20px 80px 0;
      .c-box{
        width: 41px;
      }
      .m-box{
        margin: 0 auto;
      }
      >div{
        float: left;
        width: calc(~"100% / 3");
        height: 30px;
        .c-bg{
          width: 12px;
          height: 8px;
          margin-top: 12px;
          &.c-bg1{
            background-color: #E7E6E5;
          }
          &.c-bg2{
            background-color: #FFBC32;
          }
          &.c-bg3{
            background-color: #686258;
          }
        }
        .buyed{
          line-height: 30px;
          font-size: 10px;
          margin-left: 5px;
        }
      }
    }
  }
</style>