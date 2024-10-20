import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Movie } from '../domain/movie.ts';
import { formatDate } from '../../../core/utils/format-date.ts';

export const MovieItem = ({ movie, onPress }: {movie: Movie, onPress: (movie: Movie) => void}) => {
    return (
        <TouchableOpacity onPress={() => onPress(movie)}>
            <View style={styles.movieItem}>
                <Image source={{ uri: movie.image }} style={styles.poster} />
                <View style={styles.movieInfo}>
                    <Text style={styles.movieTitle}>{movie.title}</Text>
                    <Text style={styles.movieYear}>Lanzamiento: {formatDate(movie.releaseDate)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    movieItem: {
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
        maxWidth: '100%',
    },
    poster: {
        width: 80,
        height: 120,
        borderRadius: 8,
    },
    movieInfo: {
        flex: 1,
        gap: 10,
        marginLeft: 10,
        justifyContent: 'center',
    },
    movieTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        flexWrap: 'wrap',
    },
    movieYear: {
        fontSize: 16,
        color: '#666',
    },
});
