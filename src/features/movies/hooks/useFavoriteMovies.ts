import {useEffect, useState} from 'react';
import { MoviesRepository } from '../domain/movie.repository.ts';
import { Movie } from '../domain/movie.ts';
import { GetFavoriteMoviesQry } from '../application/get-favorite-movies-qry.ts';
import { useIsFocused } from '@react-navigation/native';

export function useFavoriteMovieList(repository: MoviesRepository) {
    const isFocused = useIsFocused();
    const [favoriteMovies, setFavoriteMovies ] = useState<Movie[]>([]);

    useEffect(() => {
        if (isFocused) {
            const fetchData = async () => {
                const getFavoriteMoviesUseCase = new GetFavoriteMoviesQry(repository);
                const movies = await getFavoriteMoviesUseCase.internalExecute();
                setFavoriteMovies(movies);
            };

            fetchData();
        }
    }, [repository, isFocused]);

    return [favoriteMovies];
}
