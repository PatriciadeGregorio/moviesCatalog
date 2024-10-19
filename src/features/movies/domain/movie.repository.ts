import { Movie } from './movie.ts';
import { Page } from '../../../core/types/page.ts';
import { FavoriteMovie } from './favorite-movie.ts';

export interface MoviesRepository {
    getMovies(page: Page): Promise<Movie[]>
    markMovieAsFavorite({movie, isFavorite}: FavoriteMovie): Promise<void>
}
