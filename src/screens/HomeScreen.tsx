import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { MovieList } from '../features/movies/components/MovieList';
import { useMovieList } from '../features/movies/hooks/useMovies.ts';
import { moviesHttpRepository } from '../features/movies/infrastructure/repositories/movies-http-repository.ts';

export const HomeScreen = () => {
    const [page, setPage] = useState(1);
    const [ movieList ] = useMovieList(moviesHttpRepository, page);

    return (
        <View style={styles.container}>
            <MovieList list={movieList} onPagination={() => {
                setPage(page + 1);
            }} data-testid="movie-list"/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
