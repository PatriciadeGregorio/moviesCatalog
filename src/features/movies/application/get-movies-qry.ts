import { Movie } from '../domain/movie.ts';
import { Query } from '../../../core/use-cases/query.ts';
import { MoviesRepository } from '../domain/movie.repository.ts';
import { Page } from '../../../core/types/page.ts';

export class GetMoviesQry extends Query<Movie[], Page> {
    constructor(readonly moviesRepository: MoviesRepository) {
        super();
    }

    async internalExecute(page: Page): Promise<Movie[]> {
        return this.moviesRepository.getMovies(page);
    }
}
