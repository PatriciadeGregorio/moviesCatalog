import React from 'react';
import { MovieDetail } from '../features/movies/components/MovieDetail.tsx';

export const DetailsScreen = ({route}: any) => {
    const movie = route.params.movie;

    return (
            <MovieDetail movie={movie}/>
    );
};
