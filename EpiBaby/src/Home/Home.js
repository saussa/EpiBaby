import React from "react"
import { StyleSheet, View} from "react-native"
import Header from "./Header";
import Body from "./Body";

export default class Final extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <Header/>
                <View style={{flex: 8 }}>
                    <Body/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});