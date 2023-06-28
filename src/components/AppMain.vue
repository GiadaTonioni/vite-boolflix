<script>
import axios from 'axios';

export default {
    data() {
        return {
            movieList: []
        }
    },
    mounted() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=game+of+thrones').then((response) => {
            this.movieList = response.data.results
        })
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="col-4" v-for="(movie, index) in movieList" :key="movie.id">
                {{movie.original_title}}
                </div>
            </div>
        </div>
        
    </div>
</template>
<style lang="">
    
</style>