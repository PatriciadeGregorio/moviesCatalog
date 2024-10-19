import { Movie } from './movie.ts';
import { Page } from '../../../core/types/page.ts';

export interface MoviesRepository {
    getMovies(page: Page): Promise<Movie[]>
}
