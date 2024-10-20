import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MovieList } from '../features/movies/components/MovieList';
import { useFavoriteMovieList } from '../features/movies/hooks/useFavoriteMovies.ts';
import { useApplication } from "../context/ApplicationContext.tsx";

export const FavoriteScreen = () => {
    const { moviesRepository} = useApplication();
    const [ movieList ] = useFavoriteMovieList(moviesRepository);

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
