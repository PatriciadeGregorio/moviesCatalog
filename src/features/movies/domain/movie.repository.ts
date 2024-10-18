import { Movie } from './movie.ts';

export interface MoviesRepository {
    getMovies(): Promise<Movie[]>
}
