<script>
export default {

}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="ricerca d-flex justify-content-center">
                    <input type="text" v-model="searchMovie" class="form-control barra" placeholder="Search Movie..." @keyup.enter="sendSearch">
                    <button class="btn btn-primary" @click="sendSearch">Search</button>
                </div>
            </div>
        </div>
        
    </div>
</template>
<style lang="scss" scoped>
.barra {
    width: 600px;
}

.ricerca {
    margin: 40px;
}
</style>