<script>
export default {
    props: {
        myMovie: Object
    }
}
</script>
<template lang="">
    <div class="card text-center">
        <img :src="myMovie.poster_path" :alt="myMovie.info">
        <h4>{{myMovie.original_title}}</h4>
    </div>
</template>
<style lang="scss" scoped></style>