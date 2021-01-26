<template>
  <div class="movie-card" @click="deleteMovie">
    <div class="title-rating wrapper">
      <span class="title">{{ movie.title }}</span>
      <span class="rating">{{ movie.rating }}/5</span>
    </div>
    <div class="genre wrapper">
      <span>{{ movie.genre }}</span>
    </div>
    <div class="desc wrapper">
      <p>{{ movie.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"],

  methods: {
    deleteMovie() {
      this.$store.commit("removeMovie", this.movie);
    },
  },
};
</script>

<style scoped>
.movie-card {
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
  padding: 0.5rem;
  width: 35%;
}

.wrapper {
  display: flex;
}

.title-rating {
  justify-content: space-between;
}

.genre {
  justify-content: flex-end;
}
</style>
