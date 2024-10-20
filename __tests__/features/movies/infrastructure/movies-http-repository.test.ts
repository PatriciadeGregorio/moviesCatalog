import {
    moviesHttpRepository,
} from '../../../../src/features/movies/infrastructure/repositories/movies-http-repository.ts';
import { axiosInstance } from '../../../../src/config/axiosConfig.ts';
import { MovieMotherDto } from '../../../../src/features/movies/infrastructure/dto/MovieMotherDto.ts';
import { MovieMother } from '../../../../src/features/movies/domain/MovieMother.ts';
import { ACCOUNT_ID } from '../../../../src/core/constants.ts';

jest.mock('../../../../src/config/axiosConfig', () => ({
    axiosInstance: {
        get: jest.fn(),
        post: jest.fn(),
    },
}));
const mockedAxiosPost = axiosInstance.post as jest.Mock;
const mockedAxiosGet = axiosInstance.get as jest.Mock;


describe('Http Movies Repository', () => {

    it('should fetch movies successfully', async () => {
        const mockResponse = MovieMotherDto.filled(3);

        mockedAxiosGet.mockResolvedValueOnce({data: mockResponse});

        const movies = await moviesHttpRepository.getMovies(1);

        expect(movies.length).toBe(3);
        expect(movies[0].title).toBe('Movie title 1');
        expect(movies[1].title).toBe('Movie title 2');
        expect(movies[2].title).toBe('Movie title 3');

        expect(movies[0].image).toBe('https://media.themoviedb.org/t/p/w220_and_h330_face/testImage1');
        expect(movies[1].image).toBe('https://media.themoviedb.org/t/p/w220_and_h330_face/testImage2');
        expect(movies[2].image).toBe('https://media.themoviedb.org/t/p/w220_and_h330_face/testImage3');
    });

    it('should return an empty array of movies if the request fails', async () => {
        mockedAxiosGet.mockRejectedValueOnce(new Error('Network Error'));
        const movies = await moviesHttpRepository.getMovies(1);
        expect(movies).toEqual([]);
    });

    it('should fetch favorite movies successfully', async () => {
        const mockResponse = MovieMotherDto.filled(3);

        mockedAxiosGet.mockResolvedValueOnce({data: mockResponse});

        const movies = await moviesHttpRepository.getFavoriteMovies(1);

        expect(movies.length).toBe(3);
        expect(movies[0].title).toBe('Movie title 1');
        expect(movies[1].title).toBe('Movie title 2');
        expect(movies[2].title).toBe('Movie title 3');

        expect(movies[0].image).toBe('https://media.themoviedb.org/t/p/w220_and_h330_face/testImage1');
        expect(movies[1].image).toBe('https://media.themoviedb.org/t/p/w220_and_h330_face/testImage2');
        expect(movies[2].image).toBe('https://media.themoviedb.org/t/p/w220_and_h330_face/testImage3');
    });

    it('should return an empty array of favorite movies if the request fails', async () => {
        mockedAxiosGet.mockRejectedValueOnce(new Error('Network Error'));
        const movies = await moviesHttpRepository.getFavoriteMovies(1);
        expect(movies).toEqual([]);
    });


    it('should send the wright payload when is marked as favorite', async () => {
        mockedAxiosPost.mockResolvedValue({});
        const isFavorite = true;
        const movie = MovieMother.filled();
        await moviesHttpRepository.markMovieAsFavorite({ movie, isFavorite });

        const expectedPayload = {
            media_type: 'movie',
            media_id: movie.id,
            favorite: isFavorite,
        };

        expect(mockedAxiosPost).toHaveBeenCalledWith(`/account/${ACCOUNT_ID}/favorite`, expectedPayload);
    });

    it('should handle errors when http request fails', async () => {
        const error = new Error('API call failed');
        mockedAxiosPost.mockRejectedValue(error);

        const movie = MovieMother.filled();
        const isFavorite = true;

        await expect(moviesHttpRepository.markMovieAsFavorite({ movie, isFavorite })).rejects.toThrow(error);
    });
});
