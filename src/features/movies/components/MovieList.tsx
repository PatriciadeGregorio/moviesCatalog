import React, {useEffect, useState} from 'react';
import { FlatList, Text, View } from 'react-native';
import { MovieItem } from './MovieItem.tsx';
import { useNavigation } from '@react-navigation/native';
import { Movie } from '../domain/movie.ts';
import { useMovieStore } from '../../../store/movies.store.ts';

export function MovieList({list: movieList, onPagination}: {list: Movie[], onPagination: () => void}) {
    const navigation = useNavigation();
    const [canPaginate, setCanPaginate] = useState<boolean>(true);
    const {filtersApplied} = useMovieStore();

    useEffect(() => {
            setCanPaginate(!filtersApplied);
    }, [filtersApplied]);

    return (
            <View>
                {!movieList || movieList.length === 0 ? (
                    <Text> No se encontraron películas </Text>
                ) : (
                    <FlatList
                        data={movieList}
                        onEndReachedThreshold={0.1}
                        onEndReached={() => {
                                if (canPaginate) {
                                    onPagination();
                                }
                            }
                        }
                        renderItem={({ item }) => <MovieItem movie={item}  onPress={(movie: Movie) => {
                            navigation.navigate('Details', { movie });
                        }}  />}
                        keyExtractor={(_, index) => index.toString()}
                    />
                )}
            </View>
    );
}
