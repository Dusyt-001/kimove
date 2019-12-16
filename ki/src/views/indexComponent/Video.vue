<template>
  <div>55555</div>
</template>

<script>
import $ from "jquery";

import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("videoModule");
export default {
  name: "videol",

  computed: {
    ...mapState(["videoData"])
  },
  methods: {
     filmsData(){
       let self = this;
       this.$toast.loading({
        duration: 0,
        message: "加载中..."
      });
      this.axios({
        method:'GET',
        url:"https://douban.uieee.com/v2/movie/weekly",
       

      })
       .then(result => {
          console.log("result.data.subjects ==> ", result.data.subjects);

          //取消加载提示
          this.$toast.clear();
        })
        .catch(err => {
          console.log("err ==> ", err);
          this.$toast.clear();
        });
     }
  },

   created() {
       this.filmsData();
    }
};
</script>

<style lang="less" scoped>
</style>