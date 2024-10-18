import { DtoTransformer } from '../../../../core/utils/dto-transformer.ts';
import { Movie } from '../../domain/movie.ts';
import { MovieDto } from '../dto/movie-dto.ts';

export class MovieTransformer implements DtoTransformer<MovieDto, Movie> {
    private readonly IMAGE_PATH = 'https://media.themoviedb.org/t/p/w220_and_h330_face';
    toModel(dto: MovieDto): Movie {
        return { id: dto.id, title: dto.title, image: `${this.IMAGE_PATH}${dto.poster_path}`};
    }
}

