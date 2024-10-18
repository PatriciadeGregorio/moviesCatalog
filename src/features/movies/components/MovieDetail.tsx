import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Movie } from "../domain/movie.ts";
import { formatNumber } from "../../../core/utils/format-number.ts";
import { formatDate } from "../../../core/utils/format-date.ts";

export const MovieDetail = ({ movie }: { movie: Movie }) => {
    const ratingColor = movie.score < 5 ? styles.scoring_failed : styles.scoring_passed;


    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: movie.image }} style={styles.image} />

            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{ movie.title }</Text>
                <Text style={styles.releaseDate}>{formatDate(movie.releaseDate)}</Text>
                <Text style={[styles.scoring, ratingColor]}>Rating: {formatNumber(movie.score, 1)}/10</Text>
                <Text style={styles.description}>{movie.description}</Text>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    image: {
        width: '100%',
        height: 350,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    releaseDate: {
        fontSize: 18,
        color: '#666',
        marginBottom: 8,
    },
    scoring: {
        fontSize: 18,
        marginBottom: 16,
    },
    scoring_failed: {
        color: '#f1687d',
    },
    scoring_passed: {
        color: '#0a95f4',
    },
    description: {
        fontSize: 16,
        color: '#444',
        lineHeight: 24,
        textAlign: 'justify',
    },
});
