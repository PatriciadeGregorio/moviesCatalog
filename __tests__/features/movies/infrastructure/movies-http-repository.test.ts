import {
    moviesHttpRepository
} from '../../../../src/features/movies/infrastructure/repositories/movies-http-repository.ts';
import { axiosInstance } from '../../../../src/config/axiosConfig.ts';
import { MovieMotherDto } from '../../../../src/features/movies/infrastructure/dto/MovieMotherDto.ts';

jest.mock('../../../../src/config/axiosConfig', () => ({
    axiosInstance: {
        get: jest.fn(),
    },
}));

describe('moviesHttpRepository', () => {

    it('should fetch movies successfully', async () => {
        const mockResponse = MovieMotherDto.filled(3);

        (axiosInstance.get as jest.Mock).mockResolvedValueOnce({data: mockResponse});

        const movies = await moviesHttpRepository.getMovies();

        expect(movies.length).toBe(3);
        expect(movies[0].title).toBe('Movie title 1');
        expect(movies[1].title).toBe('Movie title 2');
        expect(movies[2].title).toBe('Movie title 3');

        expect(movies[0].image).toBe('https://media.themoviedb.org/t/p/w220_and_h330_face/testImage1');
        expect(movies[1].image).toBe('https://media.themoviedb.org/t/p/w220_and_h330_face/testImage2');
        expect(movies[2].image).toBe('https://media.themoviedb.org/t/p/w220_and_h330_face/testImage3');
    });

    it('should return an empty array if the request fails', async () => {
        (axiosInstance.get as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));
        const movies = await moviesHttpRepository.getMovies();
        expect(movies).toEqual([]);
    });
});
