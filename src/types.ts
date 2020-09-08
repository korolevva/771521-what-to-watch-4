export interface Movie {
  background: string,
  date: number,
  description: string,
  director: string,
  duration: number,
  genre: string,
  id: number,
  imagePreview: string,
  isFavorite: boolean,
  poster: string,
  preview: string,
  rating: number,
  ratingCount: number,
  stars: Array<string>,
  title: string,
}

export interface Review {
  id: number,
  author: string,
  date: string,
  rating: number,
  text: string,
}

export interface User {
  avatarUrl: string,
  email: string,
  id: number,
  name: string
}
