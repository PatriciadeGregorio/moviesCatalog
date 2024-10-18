import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MovieList } from '../features/movies/components/MovieList';

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <MovieList/>
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
