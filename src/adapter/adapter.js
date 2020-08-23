export const adapterMovie = (movie) => {
  return {
    id: movie.id,
    background: movie.background_image,
    imagePreview: movie.preview_image,
    poster: movie.poster_image,
    title: movie.name,
    genre: movie.genre,
    date: movie.released,
    description: movie.description,
    rating: movie.rating,
    ratingCount: movie.scores_count,
    director: movie.director,
    stars: movie.starring,
    duration: movie.run_time,
    preview: movie.preview_video_link,
    backgroundColor: movie.background_color,
    isFavorite: movie.is_favorite,
  };
};
