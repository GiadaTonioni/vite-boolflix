<script>
import AppMovieCard from './AppMovieCard.vue';
import { store } from '../store.js';

export default {
    components: {
        AppMovieCard
    },
    data() {
        return {
            store
        }
    },

}
</script>
<template lang="">
    <div class="container">
        <div class="row">
                <div class="col-4" v-for="(movie, index) in store.movieList" :key="movie.id">
                    <AppMovieCard :myMovie="movie" />
                </div>
        </div>
        
    </div>
</template>
<style lang="scss" scoped></style>