import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const HomeScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details', {movieId: 1})}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
