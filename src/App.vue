<template>
  <div id="app">
    <!-- <router-view /> -->
    <AddMovie @add-new-movie="sendNewMovieToMovieList" />
    <MovieList :newMovie="newMovie" />
  </div>
</template>

<script>
import AddMovie from "./views/AddMovie";
import MovieList from "./views/MovieList";

export default {
  components: {
    AddMovie,
    MovieList,
  },

  data(){
    return {
      newMovie: null
    }
  },

  methods: {
    sendNewMovieToMovieList(movie){
      this.newMovie = movie;
    }
  },
};
</script>

<style></style>
