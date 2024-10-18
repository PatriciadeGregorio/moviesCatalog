import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const DetailsScreen = ({navigation, route}: any) => {
    const movieId = route.params.movieId;

    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
            <Text>Movie ID: {movieId}</Text>
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
