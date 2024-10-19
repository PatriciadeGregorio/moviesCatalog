import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { MovieItem } from './MovieItem.tsx';
import { useNavigation } from '@react-navigation/native';
import { Movie } from '../domain/movie.ts';

export function MovieList({list: movieList, onPagination}: {list: Movie[], onPagination: () => void}) {
    const navigation = useNavigation();

    return (
            <View>
                {!movieList || movieList.length === 0 ? (
                    <Text> No se encontraron películas </Text>
                ) : (
                    <FlatList
                        data={movieList}
                        onEndReachedThreshold={0.1}
                        onEndReached={() => onPagination()}
                        renderItem={({ item }) => <MovieItem movie={item}  onPress={(movie: Movie) => {
                            navigation.navigate('Details', { movie });
                        }}  />}
                        keyExtractor={(_, index) => index.toString()}
                    />
                )}
            </View>
    );
}
