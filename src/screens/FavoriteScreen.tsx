import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MovieList } from '../features/movies/components/MovieList';
import { moviesHttpRepository } from '../features/movies/infrastructure/repositories/movies-http-repository.ts';
import { useFavoriteMovieList } from '../features/movies/hooks/useFavoriteMovies.ts';

export const FavoriteScreen = () => {
    const [ movieList ] = useFavoriteMovieList(moviesHttpRepository);

    return (
        <View style={styles.container}>
            <MovieList list={movieList} onPagination={() => {}}/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
