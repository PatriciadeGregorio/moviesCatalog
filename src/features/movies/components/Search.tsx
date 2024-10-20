import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useMovieStore } from '../../../store/movies.store.ts';

export const Search = () => {
    const { searchTerm, setSearchTerm } = useMovieStore();

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Buscar por título"
                value={searchTerm}
                onChangeText={setSearchTerm}
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
    },
});
