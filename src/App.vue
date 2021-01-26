<template>
  <div id="app">
    <!-- <router-view /> -->
    <AddMovie @add-new-movie="addMovieToMovies" />
    <div v-if="movies.length > 0">
      <MovieCard v-for="(movie, i) in movies" :key="i" :movie="movie" />
    </div>
  </div>
</template>

<script>
import AddMovie from "./views/AddMovie";
import MovieCard from "./views/MovieCard";

export default {
  components: {
    AddMovie,
    MovieCard,
  },

  data() {
    return {
      movies: [
        {
          title: "Harry Potter",
          rating: 4,
          genre: "Fantasy",
          desc: "Lorem Upsum",
        },
        {
          title: "300",
          rating: 5,
          genre: "Fantasy",
          desc: "Lorem Upsum with Sparta",
        },
      ],
    };
  },

  methods: {
    addMovieToMovies(newMovie) {
      this.movies.push(newMovie);
      console.log("In App.vue - movies: ", this.movies);
    },
  },
};
</script>

<style></style>
