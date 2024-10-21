import { MoviesRepository } from '../../domain/movie.repository.ts';
import { Movie } from '../../domain/movie.ts';
import { MovieTransformer } from '../mappers/movie-transformer.ts';
import { axiosInstance } from '../../../../config/axiosConfig.ts';
import { MovieResponseDto } from '../dto/movie-dto.ts';
import { Page } from '../../../../core/types/page.ts';
import { ACCOUNT_ID } from '../../../../core/constants.ts';
import { FavoriteMovie } from '../../domain/favorite-movie.ts';
import {GenreResponseDto} from "../dto/genre-dto.ts";
import {MovieGenresTransformer} from "../mappers/movie-genres-transformer.ts";
import {MovieGenres} from "../../domain/movie-genres.ts";

export const moviesHttpRepository: MoviesRepository = {
    getMovies: async (page: Page = 1): Promise<Movie[]> => {
        return axiosInstance.get(`/movie/popular?language=es-ES&page=${page}}`)
            .then<MovieResponseDto>((response) => response.data)
            .then(moviesDto => moviesDto.results.map(movie => new MovieTransformer().toModel(movie)))
            .catch(_ => Promise.resolve([]));
    },
    getFavoriteMovies: async (page: Page = 1): Promise<Movie[]> => {
        return axiosInstance.get(`/account/${ACCOUNT_ID}/favorite/movies?language=es-ES&page=${page}`)
            .then<MovieResponseDto>((response) => response.data)
            .then(moviesDto => moviesDto.results.map(movie => new MovieTransformer().toModel(movie)))
            .catch(_ => Promise.resolve([]));
    },
    markMovieAsFavorite: async({movie, isFavorite}: FavoriteMovie): Promise<void> => {
        const payload = {
            media_type: 'movie', media_id: movie.id, favorite:isFavorite,
        };
        await axiosInstance.post(`/account/${ACCOUNT_ID}/favorite`, payload);
    },
    getCategories: async(): Promise<MovieGenres[]> => {
        return axiosInstance.get('/genre/movie/list')
            .then<GenreResponseDto>((response) => response.data)
            .then(genresDto => new MovieGenresTransformer().toModel(genresDto.genres))
            .catch(_ => Promise.resolve([]));
    },
};
