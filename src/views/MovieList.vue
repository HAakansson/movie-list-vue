<template>
  <div class="movie-list">
    <div v-if="movies.length > 0">
      <MovieCard
        v-for="(movie, i) in movies"
        :key="i"
        :movie="movie"
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

  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
};
</script>

<style></style>
