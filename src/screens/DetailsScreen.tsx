import React from 'react';
import { StyleSheet } from 'react-native';
import { MovieDetail } from "../features/movies/components/MovieDetail.tsx";

export const DetailsScreen = ({route}: any) => {
    const movie = route.params.movie;

    return (
            <MovieDetail movie={movie}/>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
