import { Id } from '../../../core/types/id.ts';

export interface Movie {
    id: Id;
    title: string;
    image: string;
    description: string;
    releaseDate: string;
    score: number;
    genres: number[];
}
