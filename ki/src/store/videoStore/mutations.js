export const mutations = {
    changeVideoMovieData(state, result) {
   
        //将每次请求的数据推进state.movieData.data.subjects数组中
        state.videoData.data.push(...result.data);
        
        }
    
}