<script>
export default {

}
</script>
<template lang="">
    <div class="card">
        <img :src="myMovie.poster_path" class="img-fluid" :alt="myMovie.info">
        <h4>{{myMovie.original_title}}</h4>
    </div>
</template>
<style lang="scss" scoped>
img {
    width: 100%;
}
</style>