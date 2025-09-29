import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SavedScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Saved Items</Text>
            {/* Add your saved items list here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default SavedScreen;