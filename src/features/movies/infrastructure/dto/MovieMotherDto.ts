import {MovieDto, MovieResponseDto} from './movie-dto.ts';

export class MovieMotherDto {
    static filled(n: number): MovieResponseDto {
        return {
            page: 1,
            results: MovieMotherDto.results(n),
            total_pages: 34,
            total_results: 4123,
        };
    }

    static results(n: number): MovieDto[] {
        const movies = [];
        for (let i = 1; i <= n; i++) {
            movies.push({
                id: i,
                title: `Movie title ${i}`,
                adult: false,
                backdrop_path: '',
                genre_ids: [Math.random(), Math.random()],
                original_language: 'es',
                original_title: `Original tite ${i}`,
                overview: `Overview ${i}`,
                popularity: Math.random(),
                poster_path: `/testImage${i}`,
                release_date: '2024-09-12',
                video: false,
                vote_average: 7.542,
                vote_count: 123432,
            });
        }
        return movies;
    }
}
