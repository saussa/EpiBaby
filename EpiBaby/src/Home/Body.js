import React from "react";
import {Button, StyleSheet, View} from "react-native";
import * as Alert from "react-native/Libraries/Alert/Alert";

const onButtonPress = () => {
    alert('Button as been pressed')
};

export default class Body extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    style={{height: 50, width:50}}
                    onPress={onButtonPress}
                    // onPress={ () => this.props.navigator.push({ id: 'Page'})}
                    title="Press me"
                    accessibilityLabel="See an information"
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    }
});