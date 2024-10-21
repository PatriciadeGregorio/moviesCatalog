import { create } from 'zustand';
import { Movie } from '../features/movies/domain/movie.ts';

interface MovieState {
    movies: Movie[];
    filteredMovies: Movie[];
    searchTerm: string;
    filtersApplied: boolean;
    setSearchTerm: (searchTerm: string) => void;
    setMovies: (movies: Movie[]) => void;
    reset:() => void;
}

export const useMovieStore = create<MovieState>((set) => ({
    movies: [],
    filteredMovies: [],
    searchTerm: '',
    filtersApplied: false,
    setMovies: (newMovies: Movie[]) => {
        set((state) => ({
            movies: [...state.movies, ...newMovies],
            filteredMovies: [...state.movies, ...newMovies],
        }));
    },
    setSearchTerm: (newSearchTime: string) => {
        set((state) => ({
            searchTerm: newSearchTime,
            filteredMovies: newSearchTime ? state.movies.filter(movie =>
                  movie.title.toLowerCase().includes(newSearchTime.toLowerCase())
            ) : state.movies,
            filtersApplied: !!newSearchTime,
        }));
    },
    reset: () => {
        set({
            movies: [],
            filteredMovies: [],
            searchTerm: '',
            filtersApplied: false,
        });
    },
}));
