import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { MovieList } from '../../../../src/features/movies/components/MovieList.tsx';
import { useMovieList } from '../../../../src/features/movies/hooks/useMovies.ts';
import { MovieMother } from '../../../../src/features/movies/domain/MovieMother.ts';

jest.mock('../../../../src/features/movies/hooks/useMovies.ts');

const mockedNavigation = jest.fn();
jest.mock('@react-navigation/native', () => {
    return {
        useNavigation: () => ({
            navigate: mockedNavigation,
        }),
    };
});

jest.mock('@react-navigation/native-stack', () => {
    return {
        createNativeStackNavigator: jest.fn().mockReturnValue({
            Navigator: ({ children }) => children,
            Screen: () => null,
        }),
    };
});
describe('MovieList', () => {
    const mockMovies = MovieMother.list(3);

    beforeEach(() => {
        useMovieList.mockReturnValue([mockMovies]);
        mockedNavigation.mockClear();
    });

    it('should render there is no film available to show', () => {
        useMovieList.mockReturnValue([]);

        const { getByText } = render(<MovieList />);

        expect(getByText(/No se encontraron películas/i)).toBeTruthy();
    });

    it('should render a list of movies', () => {
        const { getByText } = render(<MovieList />);

        expect(getByText(/Movie title 1/i)).toBeTruthy();
        expect(getByText(/Movie title 2/i)).toBeTruthy();
        expect(getByText(/Movie title 3/i)).toBeTruthy();
    });

    it('should navigate to the details screen on movie item press', () => {
        const { getByText } = render(<MovieList />);
        const movie1 = getByText(/Movie title 1/i);

        fireEvent.press(movie1);

        expect(mockedNavigation).toHaveBeenCalledWith('Details', { movie: MovieMother.list(3)[0] });
    });
});
