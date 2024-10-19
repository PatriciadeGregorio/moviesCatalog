import { useEffect } from 'react';
import { MoviesRepository } from '../domain/movie.repository.ts';
import { GetMoviesQry } from '../application/get-movies-qry.ts';
import { Page } from '../../../core/types/page.ts';
import { useMovieStore } from '../../../store/movies.store.ts';

export function useMovieList(repository: MoviesRepository, page: Page) {
    const { filteredMovies, setMovies } = useMovieStore();

    useEffect(() => {
        const fetchData = async () => {
            const getMoviesUseCase = new GetMoviesQry(repository);
            const newMovies = await getMoviesUseCase.internalExecute(page);
            setMovies(newMovies);
        };

        fetchData();
    }, [repository, page, setMovies]);

    return [filteredMovies];
}
