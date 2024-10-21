import { Movie } from './movie.ts';
import { Page } from '../../../core/types/page.ts';
import { FavoriteMovie } from './favorite-movie.ts';
import { MovieGenres } from './movie-genres.ts';

export interface MoviesRepository {
    getMovies(page: Page): Promise<Movie[]>
    getFavoriteMovies(page: Page): Promise<Movie[]>
    markMovieAsFavorite({movie, isFavorite}: FavoriteMovie): Promise<void>
    getCategories(): Promise<MovieGenres>
}
