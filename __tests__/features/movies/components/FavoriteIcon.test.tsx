import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Toast from 'react-native-toast-message';
import { MovieMother } from '../../../../src/features/movies/domain/MovieMother.ts';
import { FavoriteIcon } from '../../../../src/features/movies/components/FavouriteIcon.tsx';
import { MarkMovieAsFavoriteCmd } from '../../../../src/features/movies/application/mark-movie-as-favorite-cmd.ts';

jest.mock('../../../../src/features/movies/application/mark-movie-as-favorite-cmd.ts');
jest.mock('react-native-toast-message', () => ({
    show: jest.fn(),
}));
const markAsFavoriteCmdMock = MarkMovieAsFavoriteCmd.prototype.internalExecute as jest.Mock;

describe('Favorite Icon Component ', () => {
    const mockMovie = MovieMother.filled();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should invoke markMovieAsFavoriteCmd when the state changes', async () => {
        markAsFavoriteCmdMock.mockResolvedValueOnce({});

        const { getByTestId } = render(<FavoriteIcon movie={mockMovie} />);
        const heartIcon = getByTestId('favorite-icon');

        fireEvent.press(heartIcon);

        await waitFor(() => {
            expect(markAsFavoriteCmdMock).toHaveBeenCalledWith({
                movie: mockMovie,
                isFavorite: true,
            });
        });
    });

    it('should show a success toast when http request have finished successfully', async () => {
        markAsFavoriteCmdMock.mockResolvedValueOnce({});

        const { getByTestId } = render(<FavoriteIcon movie={mockMovie} />);
        const heartIcon = getByTestId('favorite-icon');

        fireEvent.press(heartIcon);

        await waitFor(() => {
            expect(Toast.show).toHaveBeenCalledWith({
                type: 'success',
                text1: '¡Éxito!',
                text2: 'Tu preferencia ha sido guardada correctamente.',
                visibilityTime: 4000,
                position: 'bottom',
            });
        });
    });
});
