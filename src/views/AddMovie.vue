<template>
  <div class="add-movie">
    <form @submit.prevent="createMovie">
      <div class="title wrapper">
        <label for="title">Title</label>
        <input id="title" type="text" v-model="title" />
      </div>
      <div class="rating wrapper">
        <label for="rating">Rating</label>
        <span>1</span>
        <input id="rating" type="range" min="1" max="5" v-model="rating" />
        <span>5</span>
      </div>
      <div class="genre wrapper">
        <label for="genre">Genre</label>
        <select id="genre" name="genre" v-model="genre">
          <option v-for="(genre, i) in genres" :key="i" :value="genre">{{
            genre
          }}</option>
        </select>
      </div>
      <div class="desc wrapper">
        <label for="desc">Description</label>
        <textarea
          id="description"
          name="description"
          cols="30"
          rows="10"
          v-model="desc"
        ></textarea>
      </div>
      <button>Add</button>
    </form>
    <button>Clear</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      rating: "3",
      genre: "",
      desc: "",
      genres: [
        "Drama",
        "Action",
        "Comedy",
        "Fantasy",
        "Reality",
        "Science Fiction",
      ],
    };
  },

  methods: {
    createMovie() {
      let newMovie = {
        title: this.title,
        rating: +this.rating,
        genre: this.genre,
        desc: this.desc
      }

      this.$store.commit("addNewMovie", newMovie);
    },
  },
};
</script>

<style scoped>
.add-movie {
  border: 2px solid black;
  border-radius: 10px;
  display: inline-block;
  margin: 1rem 1rem;
  padding: 2rem;
}

input,
label {
  margin: 0 1rem;
}

.desc label {
  align-self: flex-start;
}

.wrapper {
  align-items: center;
  display: flex;
  margin: 1rem 0;
}

.button.wrapper {
  justify-content: center;
}

button {
  margin: 0 2rem;
}
</style>
