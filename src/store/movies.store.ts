import { create } from 'zustand';
import { Movie } from '../features/movies/domain/movie.ts';
import { MovieGenres } from '../features/movies/domain/movie-genres.ts';

interface MovieState {
    movies: Movie[];
    filteredMovies: Movie[];
    searchTerm: string;
    filtersApplied: boolean;
    genres: MovieGenres[];
    categoriesFiltered: number[],
    setSearchTerm: (searchTerm: string) => void;
    setMovies: (movies: Movie[]) => void;
    setGenres: (genres: MovieGenres[]) => void;
    setCategoriesFiltered: (categoriesFiltered: number[]) => void;
    reset:() => void;
}

export const useMovieStore = create<MovieState>((set) => ({
    movies: [],
    filteredMovies: [],
    searchTerm: '',
    filtersApplied: false,
    genres: [],
    categoriesFiltered: [],
    setMovies: (newMovies: Movie[]) => {
        set((state) => ({
            movies: [...state.movies, ...newMovies],
            filteredMovies: [...state.movies, ...newMovies],
        }));
    },
    setSearchTerm: (newSearchTerm: string) => {
        set((state) => ({
            ...updateFilters(state, {newSearchTerm}),
        }));
    },
    setGenres: (genres: MovieGenres[]) => {
        set((_) => ({
            genres,
        }));
    },
    setCategoriesFiltered: (newCategoriesFiltered: number[]) => {
        set((state) => ({
            ...updateFilters(state, {newCategoriesFiltered}),
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

const updateFilters = (state: MovieState, { newSearchTerm, newCategoriesFiltered }: { newSearchTerm?: string; newCategoriesFiltered?: number[] }) => {
        const searchTerm = !!newSearchTerm ? newSearchTerm : state.searchTerm;
        const categoriesFiltered = !!newCategoriesFiltered?.length ? newCategoriesFiltered : state.categoriesFiltered;

        return {
            searchTerm,
            categoriesFiltered,
            filteredMovies: applyFilters(state, searchTerm, categoriesFiltered),
            filtersApplied: areFiltersApplied(searchTerm, categoriesFiltered),
        };
};

const areFiltersApplied = (searchTerm: string, selectedCategories: number[]): boolean => {
    return !!searchTerm || selectedCategories.length > 0;
};

const applyFilters = (state: MovieState, searchTerm: string, selectedCategories: number[]) => {
    return state.movies.filter((movie: Movie) =>
        filterByTitle(movie,searchTerm) && filterByCategory(movie, selectedCategories)
    );
};

const filterByTitle = (movie: Movie, searchTerm: string) => {
    return searchTerm ? movie.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;
};

const filterByCategory = (movie: Movie, selectedCategories: number[]) =>  {
    return selectedCategories.length > 0 ? movie.genres.some((category: number) => selectedCategories.includes(category)) : true;
};
