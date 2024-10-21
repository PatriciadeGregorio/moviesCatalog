import { DtoTransformer } from '../../../../core/utils/dto-transformer.ts';
import { GenreDto } from '../dto/genre-dto.ts';
import { MovieGenres } from '../../domain/movie-genres.ts';

export class MovieGenresTransformer implements DtoTransformer<GenreDto[], MovieGenres[]> {
    toModel(dto: GenreDto[]): MovieGenres[] {
        const genres: MovieGenres[] = [];
        dto.map((genre) => genres.push( {id: genre.id, name: genre.name} ));
        return genres;
    }
}

