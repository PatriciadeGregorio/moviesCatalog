import { DtoTransformer } from '../../../../core/utils/dto-transformer.ts';
import { GenreDto } from '../dto/genre-dto.ts';
import { Id } from '../../../../core/types/id.ts';
import { MovieGenres } from '../../domain/movie-genres.ts';

export class MovieGenresTransformer implements DtoTransformer<GenreDto[], MovieGenres> {
    toModel(dto: GenreDto[]): MovieGenres {
        const genres: MovieGenres = new Map<Id, string>();
        dto.map((genre) => genres.set(genre.id, genre.name));
        return genres;
    }
}

