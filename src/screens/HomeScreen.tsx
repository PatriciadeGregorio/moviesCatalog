import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { MovieList } from '../features/movies/components/MovieList';
import { useMovieList } from '../features/movies/hooks/useMovies.ts';
import { Search } from '../features/movies/components/Search.tsx';
import { useApplication } from '../context/ApplicationContext.tsx';
import { FilterIcon } from '../features/movies/components/FilterIcon.tsx';
import { useMovieGenres } from '../features/movies/hooks/useMovieGenres.ts';

export const HomeScreen = () => {
    const { moviesRepository} = useApplication();
    const [page, setPage] = useState(1);
    const [ movieList ] = useMovieList(moviesRepository, page);
    const [genres] = useMovieGenres(moviesRepository);

    return (
        <View style={styles.container}>
            <View style={styles.mainBar}>
                <Search style={styles.searchInput}/>
                <FilterIcon genres={genres}/>
            </View>
            <MovieList list={movieList} onPagination={() => {
                setPage(page + 1);
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainBar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
    },
});
