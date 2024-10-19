import { MoviesRepository } from '../domain/movie.repository.ts';
import { Command } from '../../../core/use-cases/command.ts';
import { FavoriteMovie } from '../domain/favorite-movie.ts';

export class MarkMovieAsFavoriteCmd extends Command<FavoriteMovie> {
    constructor(readonly moviesRepository: MoviesRepository) {
        super();
    }

    async internalExecute({movie, isFavorite}: FavoriteMovie): Promise<void> {
        return this.moviesRepository.markMovieAsFavorite({movie, isFavorite});
    }
}
