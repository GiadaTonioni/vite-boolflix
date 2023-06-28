<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        }
    },
    methods: {

    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="ricerca d-flex justify-content-center">
                    <input type="text" v-model="store.searchMovie" class="form-control barra" placeholder="Search Movie..." @keyup.enter="$emit('search')">
                    <button class="btn btn-primary" @click="$emit('search')"><i class="fa-solid fa-magnifying-glass"></i></button>
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
    padding: 50px;
}
</style>