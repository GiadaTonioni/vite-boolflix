import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/multi?api_key=e99307154c6dfb0b4750f6603256716d',
    searchMovie: '',
    movieList: [],
    typeValue: '',
})