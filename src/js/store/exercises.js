class FavoritesExercisesStore {
  #LS_KEY = 'favorites_exercises_ls_key';
  #favoritesExercises = [];

  constructor() {
    this.#favoritesExercises = this.#getFavoritesExercisesFromLS();
  }

  get favoritesExercises() {
    return this.#favoritesExercises;
  }

  isFavoriteExercise(exerciseId) {
    return this.#favoritesExercises.some(({ _id }) => _id === exerciseId);
  }

  addFavoriteExercise(exercise) {
    if (this.isFavoriteExercise(exercise._id)) return;
    this.#favoritesExercises.push(exercise);
    this.#saveFavoritesExercisesToLS();
  }

  removeFavoriteExercise(exerciseId) {
    this.#favoritesExercises = this.#favoritesExercises.filter(
      ({ _id }) => _id !== exerciseId
    );
    this.#saveFavoritesExercisesToLS();
  }

  #getFavoritesExercisesFromLS() {
    try {
      const data = localStorage.getItem(this.#LS_KEY);
      if (data) {
        const parsedData = JSON.parse(data);
        return Array.isArray(parsedData) ? parsedData : [];
      }
      return [];
    } catch (error) {
      localStorage.removeItem(this.#LS_KEY);
      return [];
    }
  }

  #saveFavoritesExercisesToLS() {
    localStorage.setItem(
      this.#LS_KEY,
      JSON.stringify(this.#favoritesExercises)
    );
  }
}

export const favoritesExercisesStore = new FavoritesExercisesStore();
