<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import AppSearchBar from './components/AppSearchBar.vue'

import { store } from './store.js';

export default {
  components: {
    AppHeader,
    AppMain,
    AppSearchBar
  },
  data() {
    return {
      store
    }
  },
  mounted() {

  },
  methods: {
    getMovie() {

      let myUrl = store.apiUrl;

      if (store.searchMovie !== '') {
        myUrl += `&query=${store.searchMovie}`;
      }

      axios.get(myUrl).then((response) => {
        store.movieList = response.data.results;
        console.log(store.movieList)
      })
    }
  }
}
</script>
<template lang="">
  <div>
    <AppHeader/>
    <AppSearchBar @search="getMovie()"  />
    <AppMain/>
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss' as*;
@use './styles/partials/variables' as*;
</style>
