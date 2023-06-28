<script>
export default {
    props: {
        myMovie: Object
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card size">
                    <div class="poster">
                        <img :src="`https://image.tmdb.org/t/p/w342/${myMovie.poster_path}`" alt="">
                    </div>
                    <div class="info text-center">
                        <h3>{{ myMovie.title || myMovie.name }}</h3>
                        <h4>{{ myMovie.original_title || myMovie.original_name }}</h4>
                        <span>{{ myMovie.original_language }}</span>
                        <img :src="`../../node_modules/flagpack/flags/1x1/${myMovie.original_language}.svg`" class="flag"
                            alt="">
                        <h4>{{ myMovie.vote_average }}</h4>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.flag {
    width: 25px;
}

.size {
    height: 700px;
    width: 342px;
    margin-bottom: 25px;
    background-color: lightgray;
}

.poster {
    height: 500px;
    width: 100%;
}

.info {
    overflow-y: auto;
    height: 200px;
    margin-top: 15px;
}
</style>