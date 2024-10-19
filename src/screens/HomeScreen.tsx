import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MovieList } from '../features/movies/components/MovieList';
import { useMovieList } from '../features/movies/hooks/useMovies.ts';
import { moviesHttpRepository } from '../features/movies/infrastructure/repositories/movies-http-repository.ts';
import { Search } from '../features/movies/components/Search.tsx';

export const HomeScreen = () => {
    const [page, setPage] = useState(1);
    const [ movieList ] = useMovieList(moviesHttpRepository, page);

    return (
        <View style={styles.container}>
            <Search/>
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
});
