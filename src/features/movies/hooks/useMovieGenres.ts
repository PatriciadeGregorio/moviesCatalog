import {useEffect, useState} from 'react';
import { MoviesRepository } from '../domain/movie.repository.ts';
import { MovieGenres } from '../domain/movie-genres.ts';
import { GetMovieCategoriesQry } from '../application/get-movie-categories-qry.ts';

export function useMovieGenres(repository: MoviesRepository) {
    const [genres, setGenres ] = useState<MovieGenres>(new Map());

    useEffect(() => {
            const fetchData = async () => {
                const getMovieCategoriesUseCase = new GetMovieCategoriesQry(repository);
                const newGenres = await getMovieCategoriesUseCase.internalExecute();
                setGenres(newGenres);
            };

            fetchData();
    }, [repository]);

    return [genres];
}
