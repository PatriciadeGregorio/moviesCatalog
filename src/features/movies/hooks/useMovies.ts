import { useEffect, useState } from 'react';
import { MoviesRepository } from '../domain/movie.repository.ts';
import { GetMoviesQry } from '../application/get-movies-qry.ts';
import { Movie } from '../domain/movie.ts';
import { Page } from '../../../core/types/page.ts';

export function useMovieList(repository: MoviesRepository, page: Page) {
    const [moviesData, setMoviesData] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const getMoviesUseCase = new GetMoviesQry(repository);
            const movies = await getMoviesUseCase.internalExecute(page);
            setMoviesData((prevMovies) => [...prevMovies, ...movies]);
        };

        fetchData();
    }, [repository, page]);

    return [ moviesData];
}
