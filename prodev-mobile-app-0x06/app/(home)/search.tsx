import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const SearchScreen = () => {
    const [query, setQuery] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search</Text>
            <TextInput
                style={styles.input}
                placeholder="Type to search..."
                value={query}
                onChangeText={setQuery}
            />
            {/* Add search results here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 16,
    },
});

export default SearchScreen;