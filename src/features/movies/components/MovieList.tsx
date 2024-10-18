import React from 'react';
import {FlatList, View} from 'react-native';
import { moviesHttpRepository } from '../infrastructure/repositories/movies-http-repository.ts';
import { useMovieList } from '../hooks/useMovies.ts';
import { MovieItem } from './MovieItem.tsx';

export function MovieList() {
    const [ movieList ] = useMovieList(moviesHttpRepository);

    return (
            <View>
                {movieList &&  <FlatList
                        data={movieList}
                        renderItem={({ item }) => <MovieItem movie={item} />}
                        keyExtractor={(item) => item.id.toString()}
                    />}

            </View>
    );
}
