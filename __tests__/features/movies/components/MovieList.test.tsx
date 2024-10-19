import React from 'react';
import {render, fireEvent, RenderResult} from '@testing-library/react-native';
import { MovieList } from '../../../../src/features/movies/components/MovieList.tsx';
import { MovieMother } from '../../../../src/features/movies/domain/MovieMother.ts';

const mockedNavigation = jest.fn();
jest.mock('@react-navigation/native', () => {
    return {
        useNavigation: () => ({
            navigate: mockedNavigation,
        }),
    };
});

describe('MovieList', () => {
    const po = (res: RenderResult) => ({
        noMovies: () => res.getByText(/No se encontraron películas/i),
        titleMovie1: () => res.getByText(/Movie title 1/i),
        titleMovie2: () => res.getByText(/Movie title 2/i),
        titleMovie3: () => res.getByText(/Movie title 3/i),
    });
    const mockMovies = MovieMother.list(3);

    beforeEach(() => {
        mockedNavigation.mockClear();
    });

    it('should render there is no film available to show', () => {
        const pageObject = po(render(<MovieList list={[]} onPagination={() => {}}/>));

        expect(pageObject.noMovies()).toBeTruthy();
    });

    it('should render a list of movies', () => {
        const pageObject = po(render(<MovieList list={mockMovies} onPagination={() => {}}/>));

        expect(pageObject.titleMovie1()).toBeTruthy();
        expect(pageObject.titleMovie2()).toBeTruthy();
        expect(pageObject.titleMovie3()).toBeTruthy();
    });

    it('should navigate to the details screen on movie item press', () => {
        const pageObject = po(render(<MovieList list={mockMovies} onPagination={() => {}}/>));
        const movie1 = pageObject.titleMovie1();

        fireEvent.press(movie1);

        expect(mockedNavigation).toHaveBeenCalledWith('Details', { movie: MovieMother.list(3)[0] });
    });
});
