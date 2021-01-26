<template>
  <div class="movie-list">
    <div v-if="movies.length > 0">
      <MovieCard
        v-for="(movie, i) in movies"
        :key="i"
        :movie="movie"
        @remove-movie="removeMovie"
      />
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard";

export default {
  components: {
    MovieCard,
  },

  props: ["newMovie"],

  watch: {
    newMovie: function(newMovie, oldVal) {
      console.log("Old value: ", oldVal);
      console.log("New value: ", newMovie);
      this.movies.unshift(newMovie);
    },
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
    removeMovie(movieToRemove) {
      console.log("In movielist", movieToRemove);
      this.movies = this.movies.filter((movie) => movieToRemove !== movie);
    },
  },
};
</script>

<style></style>
