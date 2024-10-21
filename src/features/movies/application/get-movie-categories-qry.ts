import { Query } from '../../../core/use-cases/query.ts';
import { MoviesRepository } from '../domain/movie.repository.ts';
import { MovieGenres } from '../domain/movie-genres.ts';

export class GetMovieCategoriesQry extends Query<MovieGenres> {
    constructor(readonly moviesRepository: MoviesRepository) {
        super();
    }

    async internalExecute(): Promise<MovieGenres> {
        return this.moviesRepository.getCategories();
    }
}
