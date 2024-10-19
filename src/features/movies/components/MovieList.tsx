import React from 'react';
import {FlatList, Text, View} from 'react-native';
import { moviesHttpRepository } from '../infrastructure/repositories/movies-http-repository.ts';
import { useMovieList } from '../hooks/useMovies.ts';
import { MovieItem } from './MovieItem.tsx';
import { useNavigation } from '@react-navigation/native';

export function MovieList() {
    const navigation = useNavigation();
    const [ movieList ] = useMovieList(moviesHttpRepository);

    return (
            <View>
                {!movieList || movieList.length === 0 ? (
                    <Text> No se encontraron películas </Text>
                ) : (
                    <FlatList
                        data={movieList}
                        renderItem={({ item }) => <MovieItem movie={item}  onPress={(movie) => {
                            navigation.navigate('Details', { movie });
                        }}  />}
                        keyExtractor={(item) => item.id.toString()}
                    />
                )}
            </View>
    );
}
