import React, { useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';
import { MovieGenres } from '../domain/movie-genres.ts';
import { useMovieStore } from '../../../store/movies.store.ts';

export const FilterIcon = ({genres}: {genres: MovieGenres[]}) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
    const { setCategoriesFiltered } = useMovieStore();

    const toggleCheckbox = (category: number) => {
        setSelectedOptions((prev) => ([...prev, category]));
    };

    const closeModal = () => {
        if (selectedOptions) {
            setCategoriesFiltered(selectedOptions);
        }
        setModalVisible(false);
        console.log(selectedOptions);
    };

    return (
            <View>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Icon
                        style={styles.icon}
                        name="sliders"
                        size={30}
                    />
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Filtra por géneros</Text>

                            <ScrollView style={styles.scrollView}>
                                {genres.map((genre: MovieGenres) => (
                                    <View key={genre.id} style={styles.checkboxContainer}>
                                        <CheckBox
                                            value={selectedOptions.includes(genre.id)}
                                            onValueChange={() => toggleCheckbox(genre.id)}
                                        />
                                        <Text style={styles.checkboxLabel}>{genre.name}</Text>
                                    </View>
                                ))}
                            </ScrollView>

                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={closeModal}
                            >
                                <Text style={styles.buttonText}>Cerrar Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        marginLeft: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    openButton: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        height: '80%',
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    scrollView: {
        width: '100%',
        marginBottom: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    checkboxLabel: {
        fontSize: 16,
        marginLeft: 10,
    },
    closeButton: {
        backgroundColor: '#FF6347',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
});
