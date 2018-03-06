import React from "react"
import {StyleSheet, Text, View} from "react-native"
import * as Progress from 'react-native-progress';

export default class Final extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Progress.Bar progress={0.3} width={200} />
                <Progress.Pie progress={0.4} size={50} />
                <Progress.Circle size={30} indeterminate={true} />
                <Progress.CircleSnail color={['red', 'green', 'blue']} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        paddingLeft:50
    }
});

