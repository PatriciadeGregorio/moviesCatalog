import { MoviesRepository } from '../../domain/movie.repository.ts';
import { Movie } from '../../domain/movie.ts';
import { MovieTransformer } from '../mappers/movie-transformer.ts';
import { axiosInstance } from '../../../../config/axiosConfig.ts';
import { MovieResponseDto } from '../dto/movie-dto.ts';
import { Page } from '../../../../core/types/page.ts';

export const moviesHttpRepository: MoviesRepository = {
    getMovies: async (page: Page = 1): Promise<Movie[]> => {
        return axiosInstance.get(`/movie/popular?language=es-ES&page=${page}}`)
            .then<MovieResponseDto>((response) => response.data)
            .then(moviesDto => moviesDto.results.map(movie => new MovieTransformer().toModel(movie)))
            .catch(_ => Promise.resolve([]));
    },
};
