import { useEffect } from 'react';
import { MoviesRepository } from '../domain/movie.repository.ts';
import { GetMovieCategoriesQry } from '../application/get-movie-categories-qry.ts';
import { useMovieStore } from '../../../store/movies.store.ts';

export function useMovieGenres(repository: MoviesRepository) {
    const { genres, setGenres } = useMovieStore();

    useEffect(() => {
            const fetchData = async () => {
                const getMovieCategoriesUseCase = new GetMovieCategoriesQry(repository);
                const newGenres = await getMovieCategoriesUseCase.internalExecute();
                setGenres(newGenres);
            };

            fetchData();
    }, [repository, setGenres]);

    return [genres];
}
