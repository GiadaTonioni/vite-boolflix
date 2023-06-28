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
        <h3>{{myMovie.title}}</h3>
        <h4>{{myMovie.original_title}}</h4>
        <h4>{{myMovie.original_language}}</h4>
        <h4>{{myMovie.vote_average}}</h4>
    </div>
</template>
<style lang="scss" scoped>
img {
    width: 100%;
}
</style>