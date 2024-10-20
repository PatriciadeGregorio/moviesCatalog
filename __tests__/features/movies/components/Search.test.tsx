import React from 'react';
import {render, fireEvent, renderHook, waitFor} from '@testing-library/react-native';
import { useMovieStore } from '../../../../src/store/movies.store.ts';
import { Search } from '../../../../src/features/movies/components/Search.tsx';

describe('Search Component', () => {
    it('should show the value of searchTerm in the textInput and update the value in the store', async () => {
        const { result } = renderHook(() => useMovieStore());

        await waitFor(() => {
            result.current.setSearchTerm('Batman');
        });

        const { getByPlaceholderText } = render(<Search />);

        const input = getByPlaceholderText('Buscar por título');
        expect(input.props.value).toBe('Batman');

        fireEvent.changeText(input, 'Superman');
        expect(result.current.searchTerm).toEqual('Superman');
    });
});
