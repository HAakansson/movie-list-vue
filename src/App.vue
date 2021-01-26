<template>
  <div id="app">
    <AddMovie />
    <MovieList />
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
};
</script>

<style></style>
