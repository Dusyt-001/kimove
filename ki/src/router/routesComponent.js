class RoutesComponent{

  registerComponent() {
    return import('../views/Register.vue')
  }

  loginComponent() {
    return import('../views/Login.vue')
  }

  indexComponent() {
    return import('../views/Index.vue')
  }

  homeComponent() {
    return import('../views/indexComponent/Home.vue')
  }

  buyComponent() {
    return import('../views/indexComponent/Buy.vue')
  }

  findComponent() {
    return import('../views/indexComponent/Find.vue')
  }

  videoComponent() {
    return import('../views/indexComponent/Video.vue')
  }

  mineComponent() {
    return import('../views/indexComponent/Mine.vue')
  }

  movieComponent() {
    return import('../views/buyComponent/Movie.vue')
  }

  cinemaComponent() {
    return import('../views/buyComponent/Cinema.vue')
  }

  northComponent() {
    return import('../views/likeComponent/North.vue')
  }
  
  publicComponent() {
    return import('../views/likeComponent/Public.vue')
  }

  movieDetailComponent() {
    return import('../views/MovieDetail.vue')
  }

  likeMovieComponent() {
    return import('../views/LikeMovie.vue')
  }

  buyMovieTickComponent() {
    return import('../views/BuyMovieTick.vue')
  }

}

export default new RoutesComponent();