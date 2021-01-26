<template>
  <div class="add-movie">
    <div class="title wrapper">
      <label for="title">Title</label>
      <input id="title" type="text" />
    </div>
    <div class="rating wrapper">
      <label for="rating">Rating</label>
      <span>1</span>
      <input id="rating" type="range" />
      <span>5</span>
    </div>
    <div class="genre wrapper">
      <label for="genre">Genre</label>
      <select id="genre" name="genre">
        <option v-for="(genre, i) in genres" :key="i" value="genre">{{ genre }}</option>
      </select>
    </div>
    <div class="desc wrapper">
      <label for="desc">Description</label>
      <textarea
        id="description"
        name="description"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="button wrapper">
      <button>Clear</button>
      <button>Add</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      genres: [
        "Drama",
        "Action",
        "Comedy",
        "Fantasy",
        "Reality",
        "Science Fiction"
      ]
    }
  }
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
