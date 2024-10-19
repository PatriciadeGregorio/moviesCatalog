import React from 'react';
import {render, RenderResult} from '@testing-library/react-native';
import { MovieDetail } from '../../../../src/features/movies/components/MovieDetail.tsx';
import { Movie } from '../../../../src/features/movies/domain/movie.ts';
import { MovieMother } from '../../../../src/features/movies/domain/MovieMother.ts';

describe('MovieDetail', () => {
    const po = (res: RenderResult) => ({
        title: () => res.getByText(/Movie title/i),
        releaseDate: () => res.getByText(/10\/14\/2024/i),
        score: () => res.getByText(/7.1/i),
        description: () => res.getByText(/A great movie/i),
        failedScore: () => res.getByText(/3.1/i),
    });

    it('should render movie details', () => {
        const mockedMovie: Movie = MovieMother.filled();

        const pageObject = po(render(<MovieDetail movie={mockedMovie} />));

        expect(pageObject.title()).toBeTruthy();
        expect(pageObject.releaseDate()).toBeTruthy();
        expect(pageObject.score()).toBeTruthy();
        expect(pageObject.description()).toBeTruthy();

    });

    it('should apply correct styles based on score', () => {
        const mockedMovie: Movie = MovieMother.filled();

        const pageObjectWithPassedScore = po(render(<MovieDetail movie={mockedMovie} />));

        const scoringText = pageObjectWithPassedScore.score();
        expect(scoringText).toHaveStyle({ color: '#0a95f4' });

        const failedMovie = MovieMother.with({score: 3.123});
        const pageObjectWithFailedScore = po(render(<MovieDetail movie={failedMovie} />));
        const failedScoringText = pageObjectWithFailedScore.failedScore();
        expect(failedScoringText).toHaveStyle({ color: '#f1687d' });
    });
});
