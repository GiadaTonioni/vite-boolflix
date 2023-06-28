<script>
export default {
    props: {
        myMovie: Object
    }
}
</script>
<template lang="">
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w342/${myMovie.poster_path}`" alt="">
        <h3>{{myMovie.title || myMovie.name }}</h3>
        <h4>{{myMovie.original_title || myMovie.original_name}}</h4>
        <span>{{myMovie.original_language}}</span>
        <img :src="`../../node_modules/flagpack/flags/1x1/${myMovie.original_language}.svg`" class="flag" alt="">
        <h4>{{myMovie.vote_average}}</h4>
    </div>
</template>
<style lang="scss" scoped>
.flag {
    width: 25px;
}
</style>