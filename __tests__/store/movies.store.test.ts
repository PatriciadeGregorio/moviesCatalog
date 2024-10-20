import { renderHook, waitFor } from '@testing-library/react-native';
import { useMovieStore } from '../../src/store/movies.store.ts';
import { MovieMother } from '../../src/features/movies/domain/MovieMother.ts';

const moviesMock = MovieMother.list(2);

describe('useMovieStore', () => {
    beforeEach(() => {
        const store = useMovieStore.getState();
        store.reset();
    });

    it('should have the right initial state', () => {
        const { result } = renderHook(() => useMovieStore());

        expect(result.current.movies).toEqual([]);
        expect(result.current.filteredMovies).toEqual([]);
        expect(result.current.searchTerm).toBe('');
        expect(result.current.filtersApplied).toBe(false);
    });

    it('should update movies state with setMovies and filter based on searchTerm', async () => {
        const { result } = renderHook(() => useMovieStore());

        await waitFor(() => {
            result.current.setMovies(moviesMock);
        });

        expect(result.current.movies).toEqual(moviesMock);
        expect(result.current.filteredMovies).toEqual(moviesMock);

        await waitFor(() => {
            result.current.setSearchTerm('1');
        });

        expect(result.current.filteredMovies).toEqual([moviesMock[0]]);
        expect(result.current.filtersApplied).toBe(true);
    });

    it('should clean the filters when searchTerm have had value and now it is empty', async () => {
        const { result } = renderHook(() => useMovieStore());

        await waitFor( () => {
            result.current.setMovies(moviesMock);
        });

        await waitFor( () => {
            result.current.setSearchTerm('2');
        });

        expect(result.current.filteredMovies).toEqual([moviesMock[1]]);

        await waitFor( () => {
            result.current.setSearchTerm('');
        });

        expect(result.current.filteredMovies).toEqual(result.current.movies);
        expect(result.current.filtersApplied).toBe(false);
    });
});
