import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Final extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> - An Other Page - </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});