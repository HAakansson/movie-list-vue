import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  },
  mutations: {
    removeMovie(state, movieToRemove) {
      state.movies = state.movies.filter((movie) => movieToRemove !== movie);
    },
    addNewMovie(state, movieToAdd) {
      state.movies.unshift(movieToAdd);
    }
  },
});
