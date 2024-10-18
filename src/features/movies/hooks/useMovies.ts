import { useEffect, useState } from 'react';
import { MoviesRepository } from '../domain/movie.repository.ts';
import { GetMoviesQry } from '../application/get-movies-qry.ts';
import { Movie } from '../domain/movie.ts';

export function useMovieList(repository: MoviesRepository) {
    const [moviesData, setMoviesData] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const getMoviesUseCase = new GetMoviesQry(repository);
            const movies = await getMoviesUseCase.internalExecute();
            setMoviesData(movies);
        };

        fetchData();
    }, [repository]);

    return [ moviesData];
}
