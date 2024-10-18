import { Movie } from './movie.ts';

export class MovieMother {
    static filled(): Movie {
        return {
            id: 1,
            description: 'A great movie',
            image: 'https://testImage.com',
            title: 'Movie title',
            releaseDate: '2024-10-14',
            score: 7.123,
        };
    }
    static with(partial: Partial<Movie>): Movie {
        return {
            ...MovieMother.filled(),
            ...partial,
        };
    }

    static list(n: number): Movie[] {
        const movies = [];
        for (let i = 1; i <= n; i++) {
            movies.push({
                id: i,
                description: `A great movie ${i}`,
                image: `https://testImage${i}.com`,
                title: `Movie title ${i}`,
                releaseDate: `2024-10-${i}`,
                score: 1.321 + i,
            });
        }
        return movies;
    }
}
