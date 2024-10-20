import { Movie } from '../features/movies/domain/movie.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Details: { movie: Movie };
    Home: undefined;
};


export type DetailsScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Details'>;
