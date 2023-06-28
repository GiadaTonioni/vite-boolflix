<script>
export default {
    props: {
        myMovie: Object
    }
}
</script>
<template lang="">
    <div class="card">
        <img src="" alt="">
        <h4>{{myMovie.original_title}}</h4>
    </div>
</template>
<style lang="scss" scoped>
img {
    width: 100%;
}
</style>