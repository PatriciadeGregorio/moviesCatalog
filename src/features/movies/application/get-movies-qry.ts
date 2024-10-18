import { Movie } from '../domain/movie.ts';
import { Query } from '../../../core/use-cases/query.ts';
import { MoviesRepository } from '../domain/movie.repository.ts';

export class GetMoviesQry extends Query<Movie[], string> {
    constructor(readonly moviesRepository: MoviesRepository) {
        super();
    }

    async internalExecute(): Promise<Movie[]> {
        return this.moviesRepository.getMovies();
    }
}
