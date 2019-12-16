<template>
  <div class="home">
    
    <div>
      <van-search placeholder="请输入搜索关键词" />
    </div>
    <div class="banner-box">
      <div class="banner">
        <van-swipe :autoplay="3000" indicator-color="white">
           <van-swipe-item>
            <img class="auto-img" src="http://www.005.tv/uploads/allimg/190411/48-1Z411120136331.jpg" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img class="auto-img" src="http://img.netbian.com/file/2019/1105/e46c960e08ed020a86228991577635d2.jpg" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img class="auto-img" src="http://00.minipic.eastday.com/20170525/20170525105632_c6bd454c236d083a3da47731a16847e0_1.jpeg" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img class="auto-img" src="https://pic.element3ds.com/forum/201903/23/044445i3zu6j5u6lub35s7.jpg" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img class="auto-img" src="http://222.186.12.239:10010/yingshidea_20181109/desk_007.jpg" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <!-- 新片榜 -->
    <div class="new-movie">
      <div class="new-movie-title">
        <span class="fl">新片榜</span>
        <span class="fr" @click="changeNewMovieData">换一换</span>
      </div>
      <div class="new-movie-content">
        <div class="new-movie-box clearfix">
          <div class="new-movie-item" v-for="(item, index) in showNewMovieData.data" :key="index" :id="item.id" @click="viewMovieDetail({name: 'movieDetail', params: {id: item.id}})">
            <div class="new-movie-img">
              <img class="auto-img" :src="item.images.small" alt="">
            </div>
            <div class="new-movie-name one-text">{{item.title}}</div>
            <div class="star-box">
              <div class="fl clearfix star-box-count">
                <!-- 灰星 -->
                <div ref="noactivestar" class="noactive-star">
                  <span>
                    <van-icon name="star-o" />
                  </span>
                  <span>
                    <van-icon name="star-o" />
                  </span>
                  <span>
                    <van-icon name="star-o" />
                  </span>
                  <span>
                    <van-icon name="star-o" />
                  </span>
                  <span>
                    <van-icon name="star-o" />
                  </span>
                </div>
                <!-- 黄星 -->
                <div class="active-star" :style="{width: item.width + 'px'}">
                  <span>
                    <van-icon name="star-o" />
                  </span>
                  <span>
                    <van-icon name="star-o" />
                  </span>
                  <span>
                    <van-icon name="star-o" />
                  </span>
                  <span>
                    <van-icon name="star-o" />
                  </span>
                  <span>
                    <van-icon name="star-o" />
                  </span>
                </div>
              </div>
              <div class="fl star-score">{{item.rating.average}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {createNamespacedHelpers} from 'vuex'

  const {mapState} = createNamespacedHelpers('homeModule');

  export default {
    name: 'home',

    computed: {
      ...mapState(['baseUrl', 'newMovieData', 'showNewMovieData', 'isHasData', 'isInit'])
    },

    methods: {
      //换一换数据
      changeNewMovieData() {
        
        if (this.isHasData) {
          console.log('已更换数据');

          //提交换一换数据
          this.$store.commit('homeModule/toggleNewMovieData');
        }
      },

      //查看电影详情
      viewMovieDetail(o) {
        this.$router.push(o);
      }

    },

    created() {
      console.log('this.showNewMovieData ==> ', this.showNewMovieData);


      if (!this.isInit) {
        return;
      }

      //开启加载提示
      this.$toast.loading({
        duration: 0,
        message: '加载中...'
      });

      //初始化新片榜数据
      this.axios({
        method: 'GET',
        url: this.baseUrl + '/new_movies'
      }).then(result => {

        result.data.subjects.forEach((v) => {
          v.width = 0;
        })

        console.log('result ==> ', result);

        //提交actions
        this.$store
          .dispatch('homeModule/getNewMovieData', result.data.subjects)
          .then(() => {
            //根据星级平均分设置宽度
            let width = this.$refs.noactivestar[0].clientWidth;
            console.log('width ==> ', width);

            //提交modifyNewMovieData
            this.$store.commit('homeModule/modifyNewMovieData', width);

            console.log('this.showNewMovieData ==> ', this.showNewMovieData);

            this.$toast.clear();

          })

        

      }).catch(err => {

        console.log('err ==> ', err);

      })
    }
  }
</script>

<style lang="less" scoped>
  .home{
    .star-box-count{
      position: relative;
      width: 90px;
      margin-right: 5px;
      span{
        position: absolute;
        width: 18px;
        height: 18px;
        top: 0;
        font-size: 16px;
        &:nth-child(1){
          left: 0;
        }
        &:nth-child(2){
          left: 18px;
        }
        &:nth-child(3){
          left: 36px;
        }
        &:nth-child(4){
          left: 54px;
        }
        &:nth-child(5){
          left: 72px;
        }
      }
    }
    .noactive-star{
      height: 18px;
      position: relative;
      color: #e5e5e5;
    }

    .active-star{
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 18px;
      color: #FDC03D;
      overflow: hidden;
    }

    .star-score{
      width: 24px;
      height: 18px;
      text-align: center;
      line-height: 18px;
      font-size: 14px;
      color: #FDC03D;
    }

    .banner-box{
      background-color: #fff;
      padding: 10px;
    }
    .banner{
      border-radius: 10px;
      overflow: hidden;
    }
    .new-movie{
      padding: 0 10px 10px;
      margin-top: 10px;
      background-color: #fff;
    }
    .new-movie-title{
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #f2f2f2;
      >span:nth-child(1){
        color: #070707;
        font-size: 18px;
      }

      >span:nth-child(2){
        color: #92835A;
        font-size: 14px;
      }
    }

    .new-movie-content{
      overflow-x: auto;
      margin-top: 10px;
      overflow-y: hidden;
    }
    .new-movie-box{
      width: 1040px;
      >.new-movie-item{
        float: left;
        width: 121.25px;
        margin-right: 10px;
      }
      >.new-movie-item:last-child{
        margin-right: 0px;
      }
    }
    .new-movie-img{
      border-radius: 10px;
      overflow: hidden;
      height: 162px;
    }
    .new-movie-name{
      padding: 10px 0;
      text-align: center;
      font-size: 14px;
      color: #282828;
    }
  }
</style>