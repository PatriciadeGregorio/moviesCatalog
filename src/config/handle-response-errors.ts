import { Alert } from 'react-native';

export const handleResponseErrors = (error) => {
    if (!error.response) {
        Alert.alert(
            'Error de Conexión',
            'Parece que no hay conexión a internet. Por favor, revisa tu conexión e inténtalo nuevamente.',
            [{ text: 'OK' }]
        );
    } else {
        Alert.alert(
            'Error',
            `Ocurrió un error: ${error.response.status} ${error.response.data.message || 'Por favor, inténtalo más tarde.'}`,
            [{ text: 'OK' }]
        );
    }
    return Promise.reject(error);
};
