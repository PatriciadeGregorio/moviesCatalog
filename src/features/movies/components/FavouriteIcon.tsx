import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Movie } from '../domain/movie.ts';
import { MarkMovieAsFavoriteCmd } from '../application/mark-movie-as-favorite-cmd.ts';
import { useApplication } from '../../../context/ApplicationContext.tsx';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';

export const FavoriteIcon = ({movie}: {movie: Movie}) => {
    const {moviesRepository} = useApplication();
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = async () => {
        setIsFavorite(!isFavorite);
        const markMovieAsFavoriteCmd = new MarkMovieAsFavoriteCmd(moviesRepository);
        markMovieAsFavoriteCmd.internalExecute({movie, isFavorite: !isFavorite})
            .then(_ => {
                Toast.show({
                    type: 'success',
                    text1: '¡Éxito!',
                    text2: 'Tu preferencia ha sido guardada correctamente.',
                    visibilityTime: 4000,
                    position: 'bottom',
                });
            });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleFavorite}>
                <Icon
                    testID="favorite-icon"
                    name={isFavorite ? 'heart' : 'heart-o'}
                    size={30}
                    color={isFavorite ? 'red' : 'gray'}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
